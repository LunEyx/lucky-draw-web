import { FormLabel } from "@/components/ui/form-label"
import { getPrizes } from "@/services/prize"
import Image from "next/image"
import { HStack, VStack } from "styled-system/jsx"

const PrizeTierPage = async () => {
  const prizes: Prize[] = await getPrizes()

  return (
    <VStack>
      <FormLabel>SSR</FormLabel>
      <HStack>
        {prizes.filter((prize) => prize.tier === 'SSR').map((prize) => (
          <Image key={prize.id} src={prize.imageUrl} alt={prize.id} width={32 * 4} height={32 * 4} />
        ))}
      </HStack>
      <FormLabel>SR</FormLabel>
      <HStack>
        {prizes.filter((prize) => prize.tier === 'SR').map((prize) => (
          <Image key={prize.id} src={prize.imageUrl} alt={prize.id} width={32 * 4} height={32 * 4} />
        ))}
      </HStack>
      <FormLabel>R</FormLabel>
      <HStack>
        {prizes.filter((prize) => prize.tier === 'R').map((prize) => (
          <Image key={prize.id} src={prize.imageUrl} alt={prize.id} width={32 * 4} height={32 * 4} />
        ))}
      </HStack>
    </VStack>
  )
}

export default PrizeTierPage
