import { getSession } from "@/api/auth"
import { createPrize, getPrizes } from "@/services/prize"

export const GET = async () => {
  try {
    const response = await getPrizes()
    const json = await response.json()
    console.log(json)

    return Response.json(json, { status: response.status })
  } catch (err) {
    console.log(err)
    return Response.json({ message: 'error' }, { status: 500 })
  }
}

export const POST = async (req: Request) => {
  const session = await getSession()

  if (!session) {
    return Response.json({ message: 'Unauthorized' }, { status: 401 })
  }

  const data = await req.json()

  const response = await createPrize(session.idToken, data)
  const json = await response.json()

  return Response.json(json, { status: response.status })
}
