import { getSession } from '@/api/auth'
import { requestDailyBonus } from '@/services/user'

export const POST = async () => {
  const session = await getSession()

  if (!session) {
    return Response.json({ message: 'Unauthorized' }, { status: 401 })
  }

  const response = await requestDailyBonus(session.idToken)
  const json = await response.json()

  return Response.json(json, { status: response.status })
}
