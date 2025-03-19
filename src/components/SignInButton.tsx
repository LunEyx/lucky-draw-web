'use client'

import { signIn } from 'next-auth/react'
import { Button } from './ui/button'

const SignInButton = () => {
  return (
    <Button onClick={() => signIn('cognito')}>Sign In</Button>
  )
}

export default SignInButton
