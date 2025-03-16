import { Button } from '@/components/ui/button'
import { CreateToasterReturn } from '@ark-ui/react'

interface LuckyDrawButtonProps {
  luckyPoints: number,
  toaster: CreateToasterReturn
  setInventoryId: (inventoryId: string) => void
  setPrize: (prize: Prize) => void
  openDialog: () => void
}

const LuckyDrawButton = (props: LuckyDrawButtonProps) => {
  const { luckyPoints, toaster, setPrize, openDialog } = props

  const onDrawClick = async () => {
    if (luckyPoints < 1) {
      toaster.create({
        title: '幸運點不足',
        description: '請多多參與活動以獲得幸運點！',
        type: 'error',
      })
      return
    }

    const item = await drawPrize()
    setPrize(item.Prize)
    setInventoryId(item.Id)
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
