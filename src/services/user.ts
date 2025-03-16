const API_URL = process.env.NEXT_PUBLIC_API_URL

export const getUser = async (userId: string) => {
  const response = await fetch(`${API_URL}/users/${userId}`)
  return await response.json()
}
