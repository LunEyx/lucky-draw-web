import { getSession } from '@/api/auth'
import SignInButton from '@/components/SignInButton'
import SignOutButton from '@/components/SignOutButton'
import { getUser } from '@/services/user'
import { HStack } from 'styled-system/jsx'

const UserLogin = async () => {
  const session = await getSession()
  const user = session && (await (await getUser(session.user.id)).json())

  return (
    <>
      {session ? (
        <HStack>
          <SignOutButton />
          {user.name}
        </HStack>
      ) : (
        <SignInButton />
      )}
    </>
  )
}

export default UserLogin
