import { useEffect, useState } from "react"
import Image from "next/image"
import { Dialog } from "@/components/ui/dialog"
import { Box, VStack } from "styled-system/jsx"
import PresentImg from '@/assets/present.png'
import Walk1Img from '@/assets/walk1.png'
import Walk2Img from '@/assets/walk2.png'
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { QrCode } from "@ark-ui/react"
import { get_app_url } from "@/utils/url"

type LuckyDrawDialogProps = {
  prize: Prize
  inventoryId: string
} & Dialog.RootProps

const APP_URL = get_app_url()

const LuckyDrawDialog = (props: LuckyDrawDialogProps) => {
  const { prize, inventoryId, ...dialogRootProps } = props
  const [step, setStep] = useState(1)

  useEffect(() => {
    setStep(1)
  }, [dialogRootProps.open])

  const nextStep = () => {
    setStep((prev) => prev + 1)
  }

  const onAnimationEnd = () => {
    console.log('onAnimationEnd')
    setStep(2)
  }

  return (
    <Dialog.Root closeOnEscape={false} closeOnInteractOutside={false} {...dialogRootProps}>
      <Dialog.Backdrop bg='black.a5' />
      <Dialog.Positioner>
        <Dialog.Content aspectRatio={1} _landscape={{ height: '80vh' }} _portrait={{ width: '80vw' }} overflow="hidden">
          {step === 1 && (
            <>
              <Box position="absolute" width="58.9%" height="64.6%" top="50%" left="150%" transform="translate(-50%, -50%)" animationName="presentAnimation" animationDuration="4s" animationFillMode="forwards" animationTimingFunction="linear">
                <Image src={PresentImg} alt="present" />
              </Box>
              <Box position="absolute" width="12.6%" height="11.8%" top="55%" left="110%" transform="translate(-50%, -50%)" opacity={1} animationName="tokageWalkAnimation1" animationDuration="8s" animationFillMode="forwards" animationTimingFunction="linear" onAnimationEndCapture={onAnimationEnd} onAnimationEnd={onAnimationEnd}>
                <Image src={Walk1Img} alt="tokage walk1" />
              </Box>
              <Box position="absolute" width="12.6%" height="11.8%" top="55%" left="110%" transform="translate(-50%, -50%)" opacity={1} animationName="tokageWalkAnimation2" animationDuration="8s" animationFillMode="forwards" animationTimingFunction="linear">
                <Image src={Walk2Img} alt="tokage walk2" />
              </Box>
            </>
          )}
          <VStack h="100%" justify="space-around" hidden={step !== 2}>
            {prize.ImageURL ? (
              // eslint-disable-next-line
              <img src={prize.ImageURL} alt="reward" style={{ width: '75%', height: '100%', maxHeight: '75%' }} />
            ) : (
              <Skeleton h="75%" aspectRatio={1} />
            )}
            <Button variant="solid" size="lg" onClick={nextStep}>換領！</Button>
          </VStack>
          <VStack h="100%" justify="space-around" hidden={step !== 3}>
            <QrCode.Root style={{ width: '75%', height: '75%' }} defaultValue={`${APP_URL}/admin/prizes/redeem/${inventoryId}`}>
              <QrCode.Frame>
                <QrCode.Pattern />
              </QrCode.Frame>
            </QrCode.Root>
            <Dialog.CloseTrigger asChild>
              <Button variant="solid" size="lg">之後再換領！</Button>
            </Dialog.CloseTrigger>
          </VStack>
        </Dialog.Content>
      </Dialog.Positioner>
    </Dialog.Root >
  )
}

export default LuckyDrawDialog
