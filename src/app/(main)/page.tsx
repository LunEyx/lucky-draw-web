import Image from "next/image"
import HappyImg from '@/assets/happy.png'
import { Box, Center, VStack } from "styled-system/jsx"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const Home = () => {
  return (
    <Center h="100%">
      <VStack>
        <Box fontSize={64}>歡迎來喵喵生日大抽獎</Box>
        <Image src={HappyImg} alt="sorry" />
        <Link href="/lucky-draw">
          <Button size="lg">去抽獎</Button>
        </Link>
      </VStack>
    </Center >
  )
}

export default Home
