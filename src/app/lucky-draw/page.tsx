import LuckyDrawBox from '@/components/LuckyDrawBox'

const LuckyDrawPage = async () => {
  const response = await fetch(`${process.env.API_URL}/prizes`)
  const prizes = (await response.json()).default

  return (
    <div>
      <LuckyDrawBox prizes={prizes} />
    </div>
  )
}

export default LuckyDrawPage
