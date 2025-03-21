import { VStack } from 'styled-system/jsx'
import Image from 'next/image'

interface RedeemedInventoryItemProps {
  inventory: Inventory
}

const RedeemedInventoryItem = (props: RedeemedInventoryItemProps) => {
  const { inventory } = props
  return (
    <VStack
      w="200px"
      h="200px"
      justify="space-evenly"
      bg="rgb(253, 251, 240)"
      rounded="l2"
    >
      <Image
        src={inventory.prize.imageUrl}
        alt={inventory.id}
        width={200}
        height={200}
        style={{ width: '80%', aspectRatio: '1/1' }}
      />
    </VStack>
  )
}

export default RedeemedInventoryItem
