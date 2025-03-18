import { revalidateTag } from "next/cache"

const API_URL = process.env.NEXT_PUBLIC_API_URL

export const createPrize = async (idToken: string, prize: Prize) => {
  const response = await fetch(`${API_URL}/prizes`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${idToken}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(prize)
  })
  revalidateTag('prizes')
  return await response.json()
}

export const getPrizes = async () => {
  const response = await fetch(`${API_URL}/prizes`, { next: { tags: ['prizes'] } })
  return await response.json()
}

export const getPrize = async (id: string) => {
  const response = await fetch(`${API_URL}/prizes/${id}`)
  return await response.json()
}

export const updatePrize = async (idToken: string, prize: Prize) => {
  const response = await fetch(`${API_URL}/prizes/${prize.Id}`, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${idToken}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(prize)
  })
  revalidateTag('prizes')
  return await response.json()
}

export const drawPrize = async (idToken: string) => {
  const response = await fetch(`${API_URL}/prizes/draw`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${idToken}`,
      'Content-Type': 'application/json'
    },
  })
  return await response.json()
}

export const redeemPrize = async (idToken: string, id: string) => {
  const response = await fetch(`${API_URL}/prizes/redeem`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${idToken}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id
    })
  })
  return await response.json()
}
