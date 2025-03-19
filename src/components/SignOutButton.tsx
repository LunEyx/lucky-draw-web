'use client'

import { signOut } from 'next-auth/react'
import { Button } from './ui/button'
import { get_app_url } from '@/utils/url'

const SignOutButton = () => {
  const onSignOutClick = async () => {
    await signOut({ redirect: false })
    window.location.href = process.env.NEXT_PUBLIC_COGNITO_DOMAIN + '/logout?client_id='
      + process.env.NEXT_PUBLIC_COGNITO_CLIENT_ID + '&logout_uri=' + get_app_url()
  }

  return (
    <Button onClick={onSignOutClick}>Sign Out</Button>
  )
}

export default SignOutButton
