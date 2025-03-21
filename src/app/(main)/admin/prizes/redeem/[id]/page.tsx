import { getSession } from "@/api/auth"
import { redeemPrize } from "@/services/prize"
import { redirect } from "next/navigation"
import Image from "next/image"
import { Box, Center } from "styled-system/jsx"
import { VStack } from "styled-system/jsx"

interface RedeemPageProps {
  params: Promise<{ id: string }>
}

const RedeemPage = async (props: RedeemPageProps) => {
  const { params } = props
  const id = (await params).id

  const session = await getSession()
  if (!session) {
    redirect('/')
  }

  const response = await redeemPrize(session.idToken, id as string)
  let prize, error
  if (!response.ok) {
    error = 'Redeem Failed'
  } else {
    prize = await response.json()
  }

  return (
    <Center h="100vh">
      {error && (
        <Box>{error}</Box>
      )}
      {prize && (
        <VStack>
          <Image src={prize.imageUrl} alt={prize.name} />
          <Box>{prize.name}</Box>
        </VStack>
      )}
    </Center>
  )
}

export default RedeemPage
