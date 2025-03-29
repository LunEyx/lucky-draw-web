import { Center } from 'styled-system/jsx'
import { getUser } from '@/services/user'
import LuckyDrawPool from './LuckyDrawPool'
import { getSession } from '@/api/auth'
import { getPrizes } from '@/services/prize'

const LuckyDrawPage = async () => {
  const session = await getSession()

  const user = session && (await (await getUser(session.user.id)).json())
  const prizes = await (await getPrizes()).json()
  const rCount: number = prizes
    .filter((prize: Prize) => prize.tier === 'R')
    .reduce((acc: number, prize: Prize) => acc + prize.count, 0)
  const srCount: number = prizes
    .filter((prize: Prize) => prize.tier === 'SR')
    .reduce((acc: number, prize: Prize) => acc + prize.count, 0)
  const ssrCount: number = prizes
    .filter((prize: Prize) => prize.tier === 'SSR')
    .reduce((acc: number, prize: Prize) => acc + prize.count, 0)

  const prizeCount = {
    rCount,
    srCount,
    ssrCount,
  }

  return (
    <Center h="100%">
      <LuckyDrawPool luckyPoint={user.luckyPoint} prizeCount={prizeCount} />
    </Center>
  )
}

export default LuckyDrawPage
