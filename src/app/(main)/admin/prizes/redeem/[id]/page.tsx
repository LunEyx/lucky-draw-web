'use client'

import { Button } from "@/components/ui/button"
import { redeemPrize } from "@/services/prize"
import Image from "next/image"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { Box, Center } from "styled-system/jsx"
import { VStack } from "styled-system/jsx"

const RedeemPage = () => {
  const params = useParams()
  const id = params.id!
  const [prize, setPrize] = useState<Prize>()
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchRedeem = async () => {
      try {
        const idToken = 'idtoken' // TODO: auth
        const prize = await redeemPrize(idToken, id as string)
        setPrize(prize)
      } catch (err) {
        console.log(err)
        setError('Failed to redeem')
      }
    }

    if (id) { // TODO: auth
      fetchRedeem()
    }

  }, [id])
  return (
    <Center h="100vh">
      {( // TODO: auth
        <Button onClick={() => { } /* signin */}>Login</Button>
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
