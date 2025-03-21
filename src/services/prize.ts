const API_URL = process.env.NEXT_PUBLIC_API_URL

export const createPrize = async (idToken: string, prize: Prize) => {
  return fetch(`${API_URL}/prizes`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${idToken}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(prize)
  })
}

export const getPrizes = async () => {
  return fetch(`${API_URL}/prizes`)
}

export const getPrize = async (id: string) => {
  return fetch(`${API_URL}/prizes/${id}`)
}

export const updatePrize = async (idToken: string, prize: Prize) => {
  return fetch(`${API_URL}/prizes/${prize.id}`, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${idToken}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(prize)
  })
}

export const drawPrize = async (idToken: string) => {
  return fetch(`${API_URL}/prizes/draw`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${idToken}`,
      'Content-Type': 'application/json'
    },
  })
}

export const redeemPrize = async (idToken: string, id: string) => {
  return fetch(`${API_URL}/prizes/redeem`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${idToken}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id
    })
  })
}
