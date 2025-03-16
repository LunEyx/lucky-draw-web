'use client'

import { Center } from "styled-system/jsx"
import { getUser } from "@/services/user"
import LuckyDrawPool from "./LuckyDrawPool"
import { useAuth } from "react-oidc-context"
import { useEffect, useState } from "react"

const LuckyDrawPage = () => {
  const auth = useAuth()
  const [luckyPoint, setLuckyPoint] = useState(0)

  useEffect(() => {
    const fetchUser = async () => {
      const user = await getUser(auth.user!.profile.sub)
      setLuckyPoint(user.LuckyPoint)
    }

    console.log(auth)

    if (auth.user) {
      fetchUser()
    }
  }, [auth])

  return (
    <Center h="100%">
      <LuckyDrawPool setLuckyPoint={setLuckyPoint} luckyPoint={luckyPoint} />
    </Center>
  )
}

export default LuckyDrawPage
