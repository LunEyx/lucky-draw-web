'use client'

import { useRouter } from "next/navigation"
import PrizeEdit from "./PrizeEdit"

interface PrizeEditContainerProps {
  id: string
  prize: Prize
}

const PrizeEditContainer = (props: PrizeEditContainerProps) => {
  const { id, prize } = props
  const router = useRouter()

  const onSubmit = async (prize: Prize) => {
    await fetch(`/api/prizes/${id}`, { method: 'PUT', body: JSON.stringify(prize) })
    router.push('/admin/prizes')
  }

  return <PrizeEdit prize={prize} onSubmit={onSubmit} />
}

export default PrizeEditContainer
