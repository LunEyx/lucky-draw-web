'use client'

import { Button } from "@/components/ui/button"
import { redeemPrize } from "@/services/prize"
import Image from "next/image"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { useAuth } from "react-oidc-context"
import { Box, Center } from "styled-system/jsx"
import { VStack } from "styled-system/jsx"

const RedeemPage = () => {
  const auth = useAuth()
  const params = useParams()
  const id = params.id!
  const [prize, setPrize] = useState<Prize>()
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchRedeem = async () => {
      try {
        const idToken = auth.user!.id_token as string
        const prize = await redeemPrize(idToken, id as string)
        setPrize(prize)
      } catch (err) {
        console.log(err)
        setError('Failed to redeem')
      }
    }

    if (id && auth.isAuthenticated) {
      fetchRedeem()
    }

  }, [id, auth])
  return (
    <Center h="100vh">
      {!auth.isLoading && !auth.isAuthenticated && (
        <Button onClick={() => auth.signinRedirect()}>Login</Button>
      )}
      {error && (
        <Box>{error}</Box>
      )}
      {prize && (
        <VStack>
          <Image src={prize.ImageURL} alt={prize.Name} />
          <Box>{prize.Name}</Box>
        </VStack>
      )}
    </Center>
  )
}

export default RedeemPage
