import PrizeList from "@/components/prize/PrizeList"

const AdminPrizesPage = async () => {
  const response = await fetch(`${process.env.API_URL}/prizes`)
  const prizes = (await response.json()).default

  return (
    <div className="flex justify-center">
      <PrizeList prizes={prizes} />
    </div>
  )
}

export default AdminPrizesPage
