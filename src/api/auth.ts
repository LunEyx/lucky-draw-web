import { AuthOptions, getServerSession, Session } from 'next-auth'
import CognitoProvider from 'next-auth/providers/cognito'

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
    session({ session, token }) {
      if (token && token.sub) {
        session.user.id = token.sub
      }
      return session as Session
    }
  }
}

const getSession = () => getServerSession(authOptions)

export { authOptions, getSession }
