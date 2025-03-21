'use client'

import { useEffect, useState } from "react"
import Image from "next/image"
import { Dialog } from "@/components/ui/dialog"
import { Box, HStack, VStack } from "styled-system/jsx"
import PresentImg from '@/assets/present.png'
import Walk1Img from '@/assets/walk1.png'
import Walk2Img from '@/assets/walk2.png'
import ExplodeImg from '@/assets/explode.gif'
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
  const [isExplode, setIsExplode] = useState(false)

  useEffect(() => {
    setStep(1)
    setIsExplode(false)
  }, [dialogRootProps.open])

  const nextStep = () => {
    setStep((prev) => prev + 1)
  }

  const onAnimationEnd = () => {
    console.log('onAnimationEnd')
    setIsExplode(true)
    setTimeout(() => { setStep(2) }, 1000)
  }

  return (
    <Dialog.Root closeOnEscape={false} closeOnInteractOutside={false} {...dialogRootProps}>
      <Dialog.Backdrop bg='black.a5' />
      <Dialog.Positioner>
        <Dialog.Content aspectRatio={1} _landscape={{ height: '80vh' }} _portrait={{ width: '80vw' }} overflow="hidden">
          {step === 1 && (
            <>
              {
                isExplode ? (
                  <Box position="absolute" width="100%" height="100%" top="50%" left="50%" transform="translate(-50%,-50%)" >
                    <Image src={ExplodeImg} alt="explode" style={{ width: '100%', height: '100%' }} />
                  </Box>
                ) : (
                  <>
                    <Box position="absolute" width="58.9%" height="64.6%" top="50%" left="150%" transform="translate(-50%, -50%)" animationName="presentAnimation" animationDuration="4s" animationFillMode="forwards" animationTimingFunction="linear">
                      <Image src={PresentImg} alt="present" />
                    </Box>
                    <Box position="absolute" width="12.6%" height="11.8%" top="55%" left="110%" transform="translate(-50%, -50%)" opacity={1} animationName="tokageWalkAnimation1" animationDuration="5s" animationFillMode="forwards" animationTimingFunction="linear" onAnimationEnd={onAnimationEnd}>
                      <Image src={Walk1Img} alt="tokage walk1" />
                    </Box>
                    <Box position="absolute" width="12.6%" height="11.8%" top="55%" left="110%" transform="translate(-50%, -50%)" opacity={1} animationName="tokageWalkAnimation2" animationDuration="5s" animationFillMode="forwards" animationTimingFunction="linear">
                      <Image src={Walk2Img} alt="tokage walk2" />
                    </Box>
                  </>
                )}
            </>
          )}
          <VStack h="100%" justify="space-around" hidden={step !== 2}>
            {prize.imageUrl ? (
              // eslint-disable-next-line
              <img src={prize.imageUrl} alt="reward" style={{ width: '75%', height: '100%', maxHeight: '75%' }} />
            ) : (
              <Skeleton h="75%" aspectRatio={1} />
            )}
            <HStack w="full" justify="space-evenly">
              <Dialog.CloseTrigger asChild>
                <Button variant="solid" size="lg">之後再換領！</Button>
              </Dialog.CloseTrigger>
              <Button variant="solid" size="lg" onClick={nextStep}>現在換領！</Button>
            </HStack>
          </VStack>
          <VStack h="100%" justify="space-around" hidden={step !== 3}>
            {inventoryId && (
              <QrCode.Root style={{ width: '75%', height: '75%' }} defaultValue={`${APP_URL}/admin/prizes/redeem/${inventoryId}`}>
                <QrCode.Frame>
                  <QrCode.Pattern />
                </QrCode.Frame>
              </QrCode.Root>
            )}
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
