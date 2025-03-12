'use client'

import Image from 'next/image'
import { useState } from 'react'

type Prize = {
  name: string
  image: string
}

interface LuckyDrawBoxProps {
  prizes: Prize[]
}

const DURATION = 3000

const LuckyDrawBox = (props: LuckyDrawBoxProps) => {
  const { prizes = [] } = props
  const length = prizes.length
  const [offset, setOffset] = useState<number>(Math.floor(Math.random() * length) * 384)
  console.log(offset)

  const onDrawPressed = () => {
    const startTimestamp = Date.now()
    let lastTimestamp = Date.now()
    const interval = setInterval(() => {
      if (startTimestamp + DURATION < lastTimestamp) {
        setOffset((prev) => Math.floor(prev / 384) * 384)
        clearInterval(interval)
        return
      }

      const diff = Date.now() - lastTimestamp
      setOffset((prev) => (prev + diff * (25 + Math.floor(Math.random() * 25))) % (length * 384))
      lastTimestamp = Date.now()
    }, 10)
  }

  return (
    <div className="h-[100vh] flex flex-col justify-center items-center">
      <div className="text-4xl">臨時抽獎站</div>
      <div className="w-96 h-96 overflow-hidden relative">
        {prizes.map((prize) => (
          <Image key={prize.name} className="relative" style={{ top: `-${offset}px` }} src={prize.image} alt={prize.name} width={384} height={384} />
        ))}
      </div>
      <div>
        <button onClick={onDrawPressed}>抽一下！</button>
      </div>
    </div >
  )
}

export default LuckyDrawBox
