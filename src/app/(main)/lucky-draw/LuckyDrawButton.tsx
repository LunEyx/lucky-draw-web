import { Button } from '@/components/ui/button'
import { CreateToasterReturn } from '@ark-ui/react'

interface LuckyDrawButtonProps {
  luckyPoint: number,
  toaster: CreateToasterReturn
  setLuckyPoint: (luckyPoint: number) => void
  setInventoryId: (inventoryId: string) => void
  setPrize: (prize: Prize) => void
  openDialog: () => void
}

const LuckyDrawButton = (props: LuckyDrawButtonProps) => {
  const { luckyPoint, toaster, setLuckyPoint, setInventoryId, setPrize, openDialog } = props

  const onDrawClick = async () => {
    if (luckyPoint < 1) {
      toaster.create({
        title: '幸運點不足',
        description: '請多多參與活動以獲得幸運點！',
        type: 'error',
      })
      return
    }

    let response = await fetch('/api/prizes/draw')
    const item = await response.json()
    setPrize(item.prize)
    setInventoryId(item.id)
    response = await fetch('/api/users')
    const user = await response.json()
    setLuckyPoint(user.luckyPoint)
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
