import PrizeList from "@/components/prize/PrizeList"
import { Button } from "@/components/ui/button"
import { getPrizes } from "@/services/prize"
import Link from "next/link"
import { Box, Container } from "styled-system/jsx"

const AdminPrizesPage = async () => {
  const response = await getPrizes()
  const prizes = await response.json()

  return (
    <Container>
      <Box justifySelf="flex-end">
        <Link href="/admin/prizes/create">
          <Button>Create Prize</Button>
        </Link>
      </Box>
      <PrizeList prizes={prizes} />
    </Container>
  )
}

export default AdminPrizesPage
