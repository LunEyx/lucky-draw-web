import { Button } from '@/components/ui/button'
import { drawPrize } from '@/services/prize'
import { getUser } from '@/services/user'
import { CreateToasterReturn } from '@ark-ui/react'
import { useAuth } from 'react-oidc-context'

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
  const auth = useAuth()

  const onDrawClick = async () => {
    if (luckyPoint < 1) {
      toaster.create({
        title: '幸運點不足',
        description: '請多多參與活動以獲得幸運點！',
        type: 'error',
      })
      return
    }

    const idToken = auth.user!.id_token as string
    const item = await drawPrize(idToken)
    setPrize(item.Prize)
    setInventoryId(item.Id)
    const user = await getUser(auth.user!.profile.sub)
    setLuckyPoint(user.LuckyPoint)
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
