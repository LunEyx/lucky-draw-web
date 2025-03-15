import { Center } from "styled-system/jsx"
import { fetchLuckyPoints } from "@/services/user"
import LuckyDrawPool from "./LuckyDrawPool"
import Image from 'next/image'
import SorryImg from '@/assets/sorry.png'

const LuckyDrawPage = async () => {
  const luckyPoints = await fetchLuckyPoints()

  return (
    <Center h="100%">
      <LuckyDrawPool luckyPoints={luckyPoints} />
    </Center>
  )
}

export default LuckyDrawPage
