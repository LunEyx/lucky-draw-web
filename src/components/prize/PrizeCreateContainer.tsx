'use client'

import { useRouter } from "next/navigation"
import PrizeEdit from "./PrizeEdit"

const PrizeCreateContainer = () => {
  const router = useRouter()

  const onSubmit = async (prize: Prize) => {
    await fetch(`/api/prizes/`, { method: 'POST', body: JSON.stringify(prize) })
    router.push('/admin/prizes')
  }

  return <PrizeEdit onSubmit={onSubmit} />
}

export default PrizeCreateContainer
