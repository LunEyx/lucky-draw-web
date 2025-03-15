import { useEffect, useState } from "react"
import Image from "next/image"
import { Dialog } from "@/components/ui/dialog"
import { Box, VStack } from "styled-system/jsx"
import PresentImg from '@/assets/present.png'
import Walk1Img from '@/assets/walk1.png'
import Walk2Img from '@/assets/walk2.png'
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"

type LuckyDrawDialogProps = {
  image: string
} & Dialog.RootProps

const LuckyDrawDialog = (props: LuckyDrawDialogProps) => {
  const { image, ...dialogRootProps } = props
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
          {step === 2 && (
            <VStack h="100%" justify="space-around">
              {image ? (
                <img src={image} alt="reward" style={{ width: '75%', height: '100%', maxHeight: '75%' }} />
              ) : (
                <Skeleton h="75%" aspectRatio={1} />
              )}
              <Button variant="solid" size="lg" onClick={nextStep}>換領！</Button>
            </VStack>
          )}
          {step === 3 && (
            <VStack h="100%" justify="space-around">
              {image ? (
                <img src={image} alt="reward" style={{ width: '75%', height: '100%', maxHeight: '75%' }} />
              ) : (
                <Skeleton h="75%" aspectRatio={1} />
              )}
              <Dialog.CloseTrigger asChild>
                <Button variant="solid" size="lg">好耶！</Button>
              </Dialog.CloseTrigger>
            </VStack>
          )}
        </Dialog.Content>
      </Dialog.Positioner>
    </Dialog.Root >
  )
}

export default LuckyDrawDialog
