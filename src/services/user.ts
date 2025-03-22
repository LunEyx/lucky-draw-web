const API_URL = process.env.NEXT_PUBLIC_API_URL

export const getUser = async (userId: string) => {
  return fetch(`${API_URL}/users/${userId}`)
}

export const requestDailyBonus = async (idToken: string) => {
  return fetch(`${API_URL}/users/daily-bonus`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${idToken}`,
    },
  })
}
