import { Button } from '@/components/ui/button'
import { CreateToasterReturn } from '@ark-ui/react'
import PrizeJson from './prize.json'

interface LuckyDrawButtonProps {
  luckyPoints: number,
  toaster: CreateToasterReturn
  setPrizeImage: (image: string) => void
  openDialog: () => void
}

const LuckyDrawButton = (props: LuckyDrawButtonProps) => {
  const { luckyPoints, toaster, setPrizeImage, openDialog } = props

  const onDrawClick = () => {
    if (luckyPoints < 1) {
      toaster.create({
        title: '幸運點不足',
        description: '請多多參與活動以獲得幸運點！',
        type: 'error',
      })
      return
    }

    const randomPrize = PrizeJson[Math.floor(Math.random() * PrizeJson.length)]
    setPrizeImage(randomPrize.image)
    openDialog()
  }

  return (
    <Button
      colorPalette="blue"
      size="md"
      onClick={onDrawClick}
    >
      來拿禮物囉！
    </Button>
  )
}

export default LuckyDrawButton
