import { getSession } from "@/api/auth"
import AutoLogin from "@/components/AutoLogin"
import { redirect } from "next/navigation"

interface LoginPageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

const LoginPage = async (props: LoginPageProps) => {
  const { searchParams } = props
  const callbackUrl = (await searchParams).callbackUrl as string | undefined

  const session = await getSession()

  if (session) {
    if (!callbackUrl) {
      redirect('/')
    } else {
      redirect(callbackUrl)
    }
  } else {
    return <AutoLogin callbackUrl={callbackUrl} />
  }
}

export default LoginPage
