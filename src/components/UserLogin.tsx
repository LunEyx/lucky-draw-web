'use client'
import { useAuth } from "react-oidc-context";
import { Box } from "styled-system/jsx";
import { Button } from "./ui/button";

const UserLogin = () => {
  const auth = useAuth();

  const signOutRedirect = () => {
    const clientId = process.env.NEXT_PUBLIC_COGNITO_CLIENT_ID
    const logoutUri = process.env.NEXT_PUBLIC_VERCEL_URL ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}` : 'http://localhost:3000'
    const cognitoDomain = process.env.NEXT_PUBLIC_COGNITO_DOMAIN
    window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
  };

  const signIn = () => {
    auth.signinRedirect()
  }

  const signOut = () => {
    auth.removeUser()
    signOutRedirect()
  }

  if (auth.isLoading) {
    return <div>Loading...</div>;
  }

  if (auth.error) {
    return <div>Encountering error... {auth.error.message}</div>;
  }

  if (auth.isAuthenticated) {
    return (
      <Box p={4} display="flex" alignItems="center" gap={4}>
        Hello Mew,
        <Button variant="outline" onClick={signOut}>Sign out</Button>
      </Box>
    );
  }

  return (
    <Box p={4}>
      <Button variant="outline" onClick={signIn}>Sign in</Button>
    </Box>
  );
}

export default UserLogin

