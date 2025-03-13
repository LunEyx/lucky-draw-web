import PrizeListItem from './PrizeListItem'
import { Prize } from '@/types/prize'

interface PrizeListProps {
  prizes: Prize[]
}

const PrizeList = (props: PrizeListProps) => {
  const { prizes } = props

  return (
    <div className="flex flex-col">
      {prizes.map((prize) => (
        <PrizeListItem key={prize.name} prize={prize} />
      ))}
    </div>
  )
}

export default PrizeList
