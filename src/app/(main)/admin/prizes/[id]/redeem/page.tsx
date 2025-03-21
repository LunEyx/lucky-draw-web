import { getSession } from "@/api/auth"
import { redeemPrize } from "@/services/prize"
import { redirect } from "next/navigation"
import { Box, Center, styled } from "styled-system/jsx"
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
    console.log(prize)
  }

  return (
    <Center h="full">
      {
        error && (
          <Box>{error}</Box>
        )
      }
      {
        prize && (
          <VStack>
            <styled.img src={prize.imageUrl} alt={prize.name} _landscape={{ height: '50vh' }} _portrait={{ width: '50vw' }} />
            <Box>{prize.name}</Box>
          </VStack>
        )
      }
    </Center >
  )
}

export default RedeemPage
