import { getSession } from "@/api/auth"
import AutoLogin from "@/components/AutoLogin"
import { redirect } from "next/navigation"

interface LoginPageProps {
  searchParams: { [key: string]: string }
}

const LoginPage = async (props: LoginPageProps) => {
  const { searchParams } = props
  const callbackUrl = searchParams['callbackUrl']

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
