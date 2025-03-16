'use client'

import { redeemPrize } from "@/services/prize"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { useAuth } from "react-oidc-context"
import { Box, Center } from "styled-system/jsx"

const RedeemPage = () => {
  const auth = useAuth()
  const params = useParams()
  const id = params.id!
  const [message, setMessage] = useState('')

  useEffect(() => {
    const fetchRedeem = async () => {
      try {
        const idToken = auth.user!.id_token as string
        const response = await redeemPrize(idToken, id as string)
        setMessage(response.message)
      } catch (err) {
        console.log(err)
        setMessage('Failed to redeem')
      }
    }

    if (id && auth.isAuthenticated) {
      fetchRedeem()
    }

  }, [id, auth])
  return (
    <Center h="100vh">
      <Box>{message}</Box>
    </Center>
  )
}

export default RedeemPage
