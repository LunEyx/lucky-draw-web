import Image from "next/image"
import { Prize } from '@/types/prize'

interface PrizeListItemProps {
  prize: Prize
}

const PrizeListItem = (props: PrizeListItemProps) => {
  const { prize } = props

  return (
    <div className="w-full h-32 flex flex-row gap-4">
      <div className="w-32 h-32">
        <Image src={prize.image} alt={prize.name} width={32 * 4} height={32 * 4} />
      </div>
      <div className="h-full flex flex-col justify-center">
        <div>Name: {prize.name}</div>
        <div>Drawable: {prize.drawable}</div>
        <div>Tier: {prize.tier}</div>
        <div>Count: {prize.tier}</div>
      </div>
    </div>
  )
}

export default PrizeListItem
