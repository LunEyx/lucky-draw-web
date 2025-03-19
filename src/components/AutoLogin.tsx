'use client'

import { signIn } from "next-auth/react"
import { Box } from "styled-system/jsx"

interface AutoLoginProps {
  callbackUrl?: string
}

const AutoLogin = (props: AutoLoginProps) => {
  const { callbackUrl } = props

  signIn('cognito', { callbackUrl })

  return <Box>Redirecting to signin...</Box>
}

export default AutoLogin
