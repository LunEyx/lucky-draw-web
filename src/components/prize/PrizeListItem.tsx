import Image from "next/image"
import { Box } from "styled-system/jsx"
import Link from "next/link"
import { Button } from "../ui/button"
import { Checkbox } from "../ui/checkbox"

interface PrizeListItemProps {
  prize: Prize
}

const PrizeListItem = (props: PrizeListItemProps) => {
  const { prize } = props

  return (
    <Box w="100%" h={32} display="flex" flexDir="row" gap={4}>
      <Box w={32} h={"32"}>
        <Image src={prize.ImageURL} alt={prize.Name} width={32 * 4} height={32 * 4} />
      </Box>
      <Box h="full" display="flex" flexDir="column" justifyContent="center">
        <Box>Name: {prize.Name}</Box>
        <Box display="flex" flexDir="row" gap={4}>Drawable: <Checkbox checked={prize.IsDrawable} /></Box>
        <Box>Tier: {prize.Tier || "N/A"}</Box>
        <Box>Count: {prize.Count}</Box>
      </Box>
      <Box justifySelf="flex-end" alignSelf="flex-end">
        <Link href={`/admin/prizes/${prize.Id}/edit`}>
          <Button>Edit</Button>
        </Link>
      </Box>
    </Box >
  )
}

export default PrizeListItem
