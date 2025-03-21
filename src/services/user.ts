const API_URL = process.env.NEXT_PUBLIC_API_URL

export const getUser = async (userId: string) => {
  return fetch(`${API_URL}/users/${userId}`)
}
