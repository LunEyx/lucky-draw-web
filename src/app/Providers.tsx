'use client'

import { AuthProvider } from "react-oidc-context";

interface ProvidersProps {
  children: React.ReactNode
}

const cognitoAuthConfig = {
  authority: process.env.NEXT_PUBLIC_COGNITO_AUTHORITY,
  client_id: process.env.NEXT_PUBLIC_COGNITO_CLIENT_ID,
  redirect_uri: process.env.NEXT_PUBLIC_VERCEL_URL ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}` : 'http://localhost:3000',
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
