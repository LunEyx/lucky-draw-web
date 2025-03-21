'use client'

import { Container, HStack, VStack } from 'styled-system/jsx'
import RedeemableInventoryItem from './RedeemableInventoryItem'
import RedeemedInventoryItem from './RedeemedInventoryItem'
import { Heading } from '@/components/ui/heading'
import { Center } from 'styled-system/jsx'
import RedeemDialog from './RedeemDialog'
import { useMemo, useState } from 'react'

interface InventoryContainerProps {
  inventories: Inventory[]
}

const InventoryContainer = (props: InventoryContainerProps) => {
  const { inventories } = props
  const [open, setOpen] = useState(false)
  const [inventoryId, setInventoryId] = useState('')

  const redeemableInventories = useMemo(
    () => inventories.filter((inventory) => !inventory.redeemed),
    [inventories],
  )
  const redeemedInventories = useMemo(
    () => inventories.filter((inventory) => inventory.redeemed),
    [inventories],
  )

  const openDialog = (inventoryId: string) => {
    setOpen(true)
    setInventoryId(inventoryId)
  }

  return (
    <Container>
      <VStack gap={8}>
        <Center>
          <Heading size="4xl" color="unset">
            還未領取的禮物們
          </Heading>
        </Center>
        <HStack flexWrap="wrap">
          {redeemableInventories.map((inventory) => (
            <RedeemableInventoryItem
              key={inventory.id}
              inventory={inventory}
              openDialog={openDialog}
            />
          ))}
        </HStack>
        <Center>
          <Heading size="4xl" color="unset">
            已領取的禮物們
          </Heading>
        </Center>
        <HStack flexWrap="wrap">
          {redeemedInventories.map((inventory) => (
            <RedeemedInventoryItem key={inventory.id} inventory={inventory} />
          ))}
        </HStack>
      </VStack>
      <RedeemDialog open={open} inventoryId={inventoryId} />
    </Container>
  )
}

export default InventoryContainer
