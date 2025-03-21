import { AuthOptions, getServerSession, Session } from 'next-auth'
import { JWT } from 'next-auth/jwt'
import CognitoProvider from 'next-auth/providers/cognito'

const refreshToken = async (token: JWT) => {
  try {
    const url = process.env.NEXT_PUBLIC_COGNITO_DOMAIN
      + '/token?'
      + new URLSearchParams({
        client_id: process.env.NEXT_PUBLIC_COGNITO_CLIENT_ID as string,
        grant_type: 'refresh_token',
        refresh_token: token.refreshToken as string
      })

    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      method: 'POST'
    })

    if (!response.ok) {
      throw response
    }

    const refreshedTokens = await response.json()

    return {
      ...token,
      idToken: refreshedTokens.id_token,
      accessToken: refreshedTokens.access_token,
      tokenExpires: Date.now() + refreshedTokens.expires_in * 1000,
      refreshToken: refreshedTokens.refresh_token ?? token.refreshToken,
      error: undefined,
    }

  } catch (err) {
    console.log(err)

    return {
      ...token,
      error: 'RefreshAccessTokenError'
    }
  }
}

const authOptions: AuthOptions = {
  providers: [
    CognitoProvider({
      clientId: process.env.NEXT_PUBLIC_COGNITO_CLIENT_ID as string,
      clientSecret: '',
      issuer: process.env.NEXT_PUBLIC_COGNITO_ISSUER as string,
      client: {
        token_endpoint_auth_method: "none"
      },
      checks: ['pkce', 'state', 'nonce'],
    }),
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      if (account && user) {
        return {
          idToken: account.id_token,
          accessToken: account.access_token,
          tokenExpires: account.expires_at! * 1000,
          refreshToken: account.refresh_token,
          user,
          error: undefined,
        }
      }

      if (Date.now() < (token.tokenExpires as number)) {
        return token
      }
      return refreshToken(token)
    },
    session({ session, token }) {
      if (token) {
        session.user = token.user as Session['user']
        session.idToken = token.idToken as string
        session.error = token.error as string
      }

      return session as Session
    },
  }
}

const getSession = () => getServerSession(authOptions)

export { authOptions, getSession }
