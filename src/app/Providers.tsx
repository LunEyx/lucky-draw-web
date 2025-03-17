'use client'

import { AuthProvider } from "react-oidc-context";

interface ProvidersProps {
  children: React.ReactNode
}

let redirect_uri = 'http://localhost:3000'
console.log('VERCEL_ENV', process.env.NEXT_PUBLIC_VERCEL_ENV)
console.log('VERCEL_TARGET_ENV', process.env.NEXT_PUBLIC_VERCEL_TARGET_ENV)
console.log('VERCEL_URL', process.env.NEXT_PUBLIC_VERCEL_URL)
console.log('VERCEL_PROJECT_PRODUCTION_URL', process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL)
if (process.env.NEXT_PUBLIC_VERCEL_ENV === 'production' && process.env.NEXT_PUBLIC_VERCEL_URL) {
  redirect_uri = `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
} else if (process.env.NEXT_PUBLIC_VERCEL_BRANCH_URL) {
  redirect_uri = `https://${process.env.NEXT_PUBLIC_VERCEL_BRANCH_URL}`
}

const cognitoAuthConfig = {
  authority: process.env.NEXT_PUBLIC_COGNITO_AUTHORITY,
  client_id: process.env.NEXT_PUBLIC_COGNITO_CLIENT_ID,
  redirect_uri: redirect_uri,
  response_type: "code",
  scope: "email openid",
};


const Providers = (props: ProvidersProps) => {
  const { children } = props

  return (
    <AuthProvider {...cognitoAuthConfig}>
      {children}
    </AuthProvider>
  )
}

export default Providers
