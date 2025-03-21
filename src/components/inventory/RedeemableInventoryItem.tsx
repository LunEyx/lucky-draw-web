import { VStack } from 'styled-system/jsx'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

interface RedeemableInventoryItemProps {
  inventory: Inventory
  openDialog: (inventoryId: string) => void
}

const RedeemableInventoryItem = (props: RedeemableInventoryItemProps) => {
  const { inventory, openDialog } = props
  return (
    <VStack w="200px" h="300px" justify="space-evenly" bg="rgb(253, 251, 240)">
      <Image
        src={inventory.prize.imageUrl}
        alt={inventory.id}
        width={200}
        height={200}
        style={{ width: '80%', aspectRatio: '1/1' }}
      />
      <Button onClick={() => openDialog(inventory.id)}>Redeem</Button>
    </VStack>
  )
}

export default RedeemableInventoryItem
