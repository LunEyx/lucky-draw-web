'use client'

import Image from "next/image"
import HappyImg from '@/assets/happy.png'
import { Box, Center, VStack } from "../../styled-system/jsx"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useAuth } from "react-oidc-context"

const Home = () => {
  const auth = useAuth()

  return (
    <Center h="100%">
      <VStack>
        <Box fontSize={64}>歡迎來喵喵生日大抽獎</Box>
        <Image src={HappyImg} alt="sorry" />
        {auth.isAuthenticated ? (
          <Link href="/lucky-draw">
            <Button size="lg">去抽獎</Button>
          </Link>
        ) : (
          <Button size="lg" onClick={() => auth.signinRedirect()}>登入</Button>
        )}
      </VStack>
    </Center>
  )
}

export default Home
