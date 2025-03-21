const API_URL = process.env.NEXT_PUBLIC_API_URL

export const getInventories = async (idToken: string) => {
  return fetch(`${API_URL}/inventories`, {
    headers: {
      Authorization: `Bearer ${idToken}`,
    },
  })
}
