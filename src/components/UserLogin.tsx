import { getSession } from '@/api/auth';
import { Box } from 'styled-system/jsx'
import SignInButton from "./SignInButton";
import SignOutButton from "./SignOutButton";
import { getUser } from '@/services/user';
import { HStack } from 'styled-system/jsx';


const UserLogin = async () => {
  const session = await getSession()
  const user = session && await (await getUser(session.user.id)).json()

  return (
    <Box p={4} w="full">
      {session ? (
        <HStack>
          <SignOutButton />
          {user.name}
        </HStack>
      ) : (
        <SignInButton />
      )}
    </Box>
  );
}

export default UserLogin

