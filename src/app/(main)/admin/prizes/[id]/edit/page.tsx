import PrizeEditContainer from "@/components/prize/PrizeEditContainer"
import { getPrize } from "@/services/prize"

interface EditPrizePageProps {
  params: Promise<{ id: string }>
}

const EditPrizePage = async (props: EditPrizePageProps) => {
  const { params } = props
  const id = (await params).id

  const response = await getPrize(id)
  const prize = await response.json()

  return (
    <PrizeEditContainer id={id} prize={prize} />
  )
}

export default EditPrizePage
