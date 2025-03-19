import { getSession } from '@/api/auth';
import { Box } from 'styled-system/jsx'
import SignInButton from "./SignInButton";
import SignOutButton from "./SignOutButton";
import { getUser } from '@/services/user';
import { HStack } from 'styled-system/jsx';


const UserLogin = async () => {
  const session = await getSession()
  const user = session && await getUser(session.user.id)

  return (
    <Box p={4}>
      {session ? (
        <HStack>
          <SignOutButton />
          {user.Name}
        </HStack>
      ) : (
        <SignInButton />
      )}
    </Box>
  );
}

export default UserLogin

