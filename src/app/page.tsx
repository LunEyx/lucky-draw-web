import Image from "next/image"
import SorryImg from '@/assets/sorry.png'
import { Box, Center, VStack } from "../../styled-system/jsx"

const Home = () => {
  return (
    <Center h="100%">
      <VStack>
        <Box fontSize={64}>抽獎維護中，請稍後再試</Box>
        <Image src={SorryImg} alt="sorry" />
      </VStack>
    </Center>
  )
}

export default Home
