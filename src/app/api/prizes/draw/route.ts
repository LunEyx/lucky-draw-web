import { getSession } from "@/api/auth"
import { drawPrize } from "@/services/prize"

export const GET = async () => {
  const session = await getSession()

  if (!session) {
    return Response.json({ message: 'Unauthorized' }, { status: 401 })
  }

  const response = await drawPrize(session.idToken)
  const json = await response.json()

  return Response.json(json, { status: response.status })
}
