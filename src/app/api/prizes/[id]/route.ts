import { getSession } from "@/api/auth"
import { updatePrize } from "@/services/prize"

export const PUT = async (req: Request) => {
  const session = await getSession()

  if (!session) {
    return Response.json({ 'message': 'Unauthorized' }, { status: 401 })
  }

  const body = await req.json()

  const response = await updatePrize(session.idToken, body)
  const json = await response.json()

  return Response.json(json, { status: response.status })
}
