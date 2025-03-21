import { Box } from 'styled-system/jsx'
import PrizeListItem from './PrizeListItem'

interface PrizeListProps {
  prizes: Prize[]
}

const PrizeList = (props: PrizeListProps) => {
  const { prizes } = props

  return (
    <Box w="100%" display="flex" flexDir="column" className="flex flex-col">
      {prizes.map((prize) => (
        <PrizeListItem key={prize.id} prize={prize} />
      ))}
    </Box>
  )
}

export default PrizeList
