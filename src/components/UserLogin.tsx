'use client'
import { AuthProvider, useAuth } from "react-oidc-context";

const cognitoAuthConfig = {
  authority: "https://cognito-idp.ap-southeast-2.amazonaws.com/ap-southeast-2_eHKU6HdFR",
  client_id: "78asrfssbhr20i95rsjes57dhd",
  redirect_uri: "http://localhost:3000",
  response_type: "code",
  scope: "email openid",
};

const Container = () => {
  return (
    <AuthProvider {...cognitoAuthConfig}>
      <UserLogin />
    </AuthProvider>
  )
}

const UserLogin = () => {
  const auth = useAuth();

  const signOutRedirect = () => {
    const clientId = "78asrfssbhr20i95rsjes57dhd";
    const logoutUri = "http://localhost:3000";
    const cognitoDomain = "https://lucky-draw.auth.ap-southeast-2.amazoncognito.com";
    window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
  };

  if (auth.isLoading) {
    return <div>Loading...</div>;
  }

  if (auth.error) {
    return <div>Encountering error... {auth.error.message}</div>;
  }

  if (auth.isAuthenticated) {
    return (
      <div>
        <pre> Hello: {auth.user?.profile.email} </pre>
        <pre> ID Token: {auth.user?.id_token} </pre>
        <pre> Access Token: {auth.user?.access_token} </pre>
        <pre> Refresh Token: {auth.user?.refresh_token} </pre>

        <button onClick={() => auth.removeUser()}>Sign out</button>
      </div>
    );
  }

  return (
    <div>
      <button onClick={() => auth.signinRedirect()}>Sign in</button>
      <button onClick={() => signOutRedirect()}>Sign out</button>
    </div>
  );
}

export default Container

