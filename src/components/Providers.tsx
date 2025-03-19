'use client'

import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

interface ProvidersProps {
  children: React.ReactNode
  session: Session | null
}

const Providers = (props: ProvidersProps) => {
  const { children, session } = props
  return (
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  )
}

export default Providers
