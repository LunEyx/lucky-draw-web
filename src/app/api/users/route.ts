import { getSession } from "@/api/auth"
import { getUser } from "@/services/user"

export const GET = async () => {
  const session = await getSession()

  if (!session) {
    return Response.json({ message: 'Unauthorized' }, { status: 401 })
  }

  const response = await getUser(session.user.id)
  const json = await response.json()

  return Response.json(json, { status: response.status })
}
