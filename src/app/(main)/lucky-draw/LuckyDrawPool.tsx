'use client'

import { useState } from "react"
import { XIcon } from "lucide-react"
import { Toast } from '@/components/ui/toast'
import { Box, HStack } from 'styled-system/jsx'
import LuckyDrawButton from './LuckyDrawButton'
import LuckyDrawDialog from './LuckyDrawDialog'
import { DialogOpenChangeDetails } from "@ark-ui/react"

interface LuckyDrawPoolProps {
  luckyPoint: number
}

const toaster = Toast.createToaster({
  placement: 'bottom-end',
  gap: 8,
})

const LuckyDrawPool = (props: LuckyDrawPoolProps) => {
  const { luckyPoint: serverLuckyPoint } = props
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

  return (
    <>
      <Box shadow="2xl" p="4" bg="white" borderRadius="2xl">
        <HStack>
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
      </Box>

      <LuckyDrawDialog prize={prize} inventoryId={inventoryId} open={isDialogOpen} onOpenChange={onDialogOpenChange} />

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
