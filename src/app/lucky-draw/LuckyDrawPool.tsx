'use client'

import { useState } from "react"
import { XIcon } from "lucide-react"
import { Toast } from '@/components/ui/toast'
import { Box, HStack } from 'styled-system/jsx'
import LuckyDrawButton from './LuckyDrawButton'
import LuckyDrawDialog from './LuckyDrawDialog'
import { DialogOpenChangeDetails } from "@ark-ui/react"

interface LuckyDrawPoolProps {
  luckyPoints: number
}

const toaster = Toast.createToaster({
  placement: 'bottom-end',
  gap: 8,
})

const LuckyDrawPool = (props: LuckyDrawPoolProps) => {
  const { luckyPoints } = props
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [prizeImage, setPrizeImage] = useState('')

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
            luckyPoints={luckyPoints}
            toaster={toaster}
            setPrizeImage={setPrizeImage}
            openDialog={() => setIsDialogOpen(true)}
          />
          <Box>持有的幸運點：{luckyPoints}</Box>
        </HStack>
      </Box>

      <LuckyDrawDialog image={prizeImage} open={isDialogOpen} onOpenChange={onDialogOpenChange} />

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
