'use client'

import { useState } from 'react'
import { XIcon } from 'lucide-react'
import { Toast } from '@/components/ui/toast'
import { Box, Center, HStack, VStack } from 'styled-system/jsx'
import LuckyDrawButton from './LuckyDrawButton'
import LuckyDrawDialog from './LuckyDrawDialog'
import { DialogOpenChangeDetails } from '@ark-ui/react'
import { Text } from '@/components/ui/text'

interface LuckyDrawPoolProps {
  luckyPoint: number
  prizeCount: { rCount: number; srCount: number; ssrCount: number }
}

const toaster = Toast.createToaster({
  placement: 'bottom-end',
  gap: 8,
})

const LuckyDrawPool = (props: LuckyDrawPoolProps) => {
  const { luckyPoint: serverLuckyPoint, prizeCount } = props
  const [luckyPoint, setLuckyPoint] = useState(serverLuckyPoint)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [prize, setPrize] = useState<Prize>({} as Prize)
  const [inventoryId, setInventoryId] = useState('')

  const onDialogOpenChange = (details: DialogOpenChangeDetails) => {
    if (details.open) {
      setIsDialogOpen(true)
    } else {
      setIsDialogOpen(false)
    }
  }

  console.log(prizeCount)
  const rarities = ['r', 'sr', 'ssr']
  const colors = ['192, 192, 192', '153, 196, 210', '255, 250, 205']

  return (
    <>
      <Box shadow="2xl" p="8" bg="white" borderRadius="2xl">
        <VStack gap={8}>
          <HStack gap={8}>
            {rarities.map((rarity: string, index: number) => (
              <HStack key={rarity}>
                <Box position="relative" w="200px" h="200px">
                  <Box
                    position="absolute"
                    top={0}
                    left={0}
                    w="full"
                    h="full"
                    style={{
                      background: `radial-gradient(circle, rgba(${colors[index]}, 1) 0%, rgba(${colors[index]}, 0) 70%)`,
                    }}
                  />
                  <Center
                    position="absolute"
                    top={0}
                    left={0}
                    w="full"
                    h="full"
                  >
                    <Text size="6xl">{rarity.toUpperCase()}</Text>
                  </Center>
                </Box>
                <Text size="4xl">
                  x
                  {
                    prizeCount[
                      (rarity + 'Count') as 'rCount' | 'srCount' | 'ssrCount'
                    ]
                  }
                </Text>
              </HStack>
            ))}
          </HStack>
          <HStack gap={4}>
            <LuckyDrawButton
              luckyPoint={luckyPoint}
              toaster={toaster}
              setLuckyPoint={setLuckyPoint}
              setPrize={setPrize}
              setInventoryId={setInventoryId}
              openDialog={() => setIsDialogOpen(true)}
            />
            <Box>持有的幸運點：{luckyPoint}</Box>
          </HStack>
        </VStack>
      </Box>

      <LuckyDrawDialog
        prize={prize}
        inventoryId={inventoryId}
        open={isDialogOpen}
        onOpenChange={onDialogOpenChange}
      />

      <Toast.Toaster toaster={toaster}>
        {(toast) => (
          <Toast.Root key={toast.id}>
            <Toast.Title>{toast.title}</Toast.Title>
            <Toast.Description>{toast.description}</Toast.Description>
            <Toast.CloseTrigger>
              <XIcon size={24} />
            </Toast.CloseTrigger>
          </Toast.Root>
        )}
      </Toast.Toaster>
    </>
  )
}
export default LuckyDrawPool
