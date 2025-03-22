import { getSession } from '@/api/auth'
import { getUser } from '@/services/user'
import DailyBonusDialog from './DailyBonusDialog'

const LoginBonusDialog = async () => {
  const session = await getSession()

  if (!session) return null

  const user: User = await (await getUser(session.user.id)).json()
  console.log(user)

  const isSameDay = (date: string) => {
    const lastLogin = new Date(date + 11 * 60 * 60 * 1000)
    const today = new Date(new Date().getTime() + 11 * 60 * 60 * 1000)
    return (
      lastLogin.getUTCFullYear() === today.getUTCFullYear() &&
      lastLogin.getUTCMonth() === today.getUTCMonth() &&
      lastLogin.getUTCDate() === today.getUTCDate()
    )
  }

  if (isSameDay(user.lastLoginTimestamp)) return null

  return <DailyBonusDialog totalLoginDays={user.totalLoginDays} />
}

export default LoginBonusDialog
