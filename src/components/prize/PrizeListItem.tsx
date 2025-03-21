import { Box } from "styled-system/jsx"
import Link from "next/link"
import { Button } from "../ui/button"
import { Checkbox } from "../ui/checkbox"
import Image from "next/image"

interface PrizeListItemProps {
  prize: Prize
}

const PrizeListItem = (props: PrizeListItemProps) => {
  const { prize } = props

  return (
    <Box w="100%" h={32} display="flex" flexDir="row" gap={4}>
      <Box w={32} h={"32"}>
        <Image src={prize.imageUrl} alt={prize.name} width={32 * 4} height={32 * 4} />
      </Box>
      <Box h="full" display="flex" flexDir="column" justifyContent="center">
        <Box>Name: {prize.name}</Box>
        <Box display="flex" flexDir="row" gap={4}>Drawable: <Checkbox checked={prize.isDrawable} /></Box>
        <Box>Tier: {prize.tier || "N/A"}</Box>
        <Box>count: {prize.count}</Box>
      </Box>
      <Box flex={1} justifySelf="flex-end" alignSelf="flex-end">
        <Link href={`/admin/prizes/${prize.id}/edit`}>
          <Button>Edit</Button>
        </Link>
      </Box>
    </Box >
  )
}

export default PrizeListItem
