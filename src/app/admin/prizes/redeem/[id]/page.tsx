'use client'

import { Button } from "@/components/ui/button"
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
        setMessage(JSON.stringify(response))
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
      {!auth.isLoading && !auth.isAuthenticated && (
        <Button onClick={() => auth.signinRedirect()}>Login</Button>
      )}
      <Box>{message}</Box>
    </Center>
  )
}

export default RedeemPage
