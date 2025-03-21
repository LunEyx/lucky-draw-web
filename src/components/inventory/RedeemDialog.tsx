'use client'

import { Dialog } from '@/components/ui/dialog'
import { get_app_url } from '@/utils/url'
import { QrCode } from '@ark-ui/react'
import { VStack } from 'styled-system/jsx'
import { Button } from '@/components/ui/button'

interface RedeemDialogProps {
  open: boolean
  inventoryId: string
}

const RedeemDialog = (props: RedeemDialogProps) => {
  const { open, inventoryId } = props
  const APP_URL = get_app_url()

  return (
    <Dialog.Root open={open}>
      <Dialog.Backdrop bg="black.a5" />
      <Dialog.Positioner>
        <Dialog.Content
          aspectRatio={1}
          _landscape={{ height: '80vh' }}
          _portrait={{ width: '80vw' }}
          overflow="hidden"
        >
          <VStack h="100%" justify="space-around">
            {inventoryId && (
              <QrCode.Root
                style={{ width: '75%', height: '75%' }}
                defaultValue={`${APP_URL}/admin/prizes/${inventoryId}/redeem`}
              >
                <QrCode.Frame>
                  <QrCode.Pattern />
                </QrCode.Frame>
              </QrCode.Root>
            )}
            <Dialog.CloseTrigger asChild>
              <Button variant="solid" size="lg">
                之後再換領！
              </Button>
            </Dialog.CloseTrigger>
          </VStack>
        </Dialog.Content>
      </Dialog.Positioner>
    </Dialog.Root>
  )
}

export default RedeemDialog
