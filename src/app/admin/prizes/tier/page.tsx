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
        {prizes.filter((prize) => prize.Tier === 'SSR').map((prize) => (
          <Image key={prize.Id} src={prize.ImageURL} alt={prize.Id} width={32 * 4} height={32 * 4} />
        ))}
      </HStack>
      <FormLabel>SR</FormLabel>
      <HStack>
        {prizes.filter((prize) => prize.Tier === 'SR').map((prize) => (
          <Image key={prize.Id} src={prize.ImageURL} alt={prize.Id} width={32 * 4} height={32 * 4} />
        ))}
      </HStack>
      <FormLabel>R</FormLabel>
      <HStack>
        {prizes.filter((prize) => prize.Tier === 'R').map((prize) => (
          <Image key={prize.Id} src={prize.ImageURL} alt={prize.Id} width={32 * 4} height={32 * 4} />
        ))}
      </HStack>
    </VStack>
  )
}

export default PrizeTierPage
