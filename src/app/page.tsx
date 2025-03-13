import Image from "next/image"
import SorryImg from '@/assets/sorry.png'

const Home = () => {
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center">
      <div className="flex flex-col items-center gap-12">
        <div className="text-6xl">抽獎維護中，請稍後再試</div>
        <Image src={SorryImg} alt="sorry" />
      </div>
    </div>
  )
}

export default Home
