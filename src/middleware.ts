import { withAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'

export default withAuth(
  function middleware() {
    return NextResponse.next()
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token, // Check if user is authenticated
    },
    pages: {
      signIn: '/auth/login',
    },
  },
)

export const config = {
  matcher: ['/admin/:path*', '/lucky-draw', '/inventory'],
}
