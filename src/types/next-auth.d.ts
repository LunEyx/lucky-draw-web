// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type NextAuth from 'next-auth'

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    error?: string
    idToken: string
    user: {
      id: string
    }
  }
}
