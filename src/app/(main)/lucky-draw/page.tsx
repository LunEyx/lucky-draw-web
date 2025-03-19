import { Center } from "styled-system/jsx"
import { getUser } from "@/services/user"
import LuckyDrawPool from "./LuckyDrawPool"
import { getSession } from "@/api/auth"

const LuckyDrawPage = async () => {
  const session = await getSession()

  const user = session && await getUser(session.user.id)

  return (
    <Center h="100%">
      <LuckyDrawPool luckyPoint={user.LuckyPoint} />
    </Center>
  )
}

export default LuckyDrawPage
