'use client'

import { AuthProvider } from "react-oidc-context";

interface ProvidersProps {
  children: React.ReactNode
}

const cognitoAuthConfig = {
  authority: "https://cognito-idp.ap-southeast-2.amazonaws.com/ap-southeast-2_DnLm5Gq3Y",
  client_id: "5800gfchrha5urcloep3j3q2s7",
  redirect_uri: "http://localhost:3000",
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
