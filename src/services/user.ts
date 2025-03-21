const API_URL = process.env.API_URL

export const getUser = async (userId: string) => {
  return fetch(`${API_URL}/users/${userId}`)
}
