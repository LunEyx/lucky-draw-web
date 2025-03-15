import PrizeList from "@/components/prize/PrizeList"
import PrizeJson from "@/app/lucky-draw/prize.json"
import { Prize } from '@/types/prize'

const AdminPrizesPage = async () => {
  //const response = await fetch(`${process.env.API_URL}/prizes`)
  //const prizes = (await response.json()).default

  return (
    <div className="flex justify-center">
      <PrizeList prizes={PrizeJson as Prize[]} />
    </div>
  )
}

export default AdminPrizesPage
