import { getSession } from '@/api/auth'
import { HStack } from 'styled-system/jsx'
import UserLogin from './UserLogin'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const Menu = async () => {
  const session = await getSession()

  return (
    <HStack p={4} w="full" justify="space-between">
      <UserLogin />
      {session && (
        <HStack>
          <Link href="/lucky-draw">
            <Button>抽獎去！</Button>
          </Link>
          <Link href="/inventory">
            <Button>獎品</Button>
          </Link>
        </HStack>
      )}
    </HStack>
  )
}

export default Menu
