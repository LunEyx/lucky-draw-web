'use client'

import CheckboxField from "@/components/form/CheckboxField"
import InputField from "@/components/form/InputField"
import NumericField from "@/components/form/NumericField"
import SelectField from "@/components/form/SelectField"
import { Button } from "@/components/ui/button"
import { createListCollection } from "@ark-ui/react"
import { useState } from "react"
import { Box, Container, HStack, VStack } from "styled-system/jsx"

interface PrizeEditProps {
  prize?: Prize
  onSubmit: (prize: Prize) => void
}

const emptyPrize: Prize = { id: '', name: '', imageUrl: '', tier: '', count: 0, isDrawable: false }

const PrizeEdit = (props: PrizeEditProps) => {
  const { prize: serverPrize = emptyPrize, onSubmit: submit } = props
  const [prize, setPrize] = useState(serverPrize)
  const [loading, setLoading] = useState(false)

  const collection = createListCollection({
    items: [
      { label: 'R', value: 'R' },
      { label: 'SR', value: 'SR' },
      { label: 'SSR', value: 'SSR' },
    ]
  })

  const onSubmit = () => {
    setLoading(true)
    submit(prize)
  }

  return (
    <Container>
      <VStack>
        <HStack w="100%">
          <InputField flex={1} label="name" value={prize.name} onChange={(event) => setPrize((prev) => ({ ...prev, name: event.target.value }))} />
          <InputField flex={1} label="Image URL" value={prize.imageUrl} onChange={(event) => setPrize((prev) => ({ ...prev, imageUrl: event.target.value }))} />
        </HStack>
        <HStack w="100%">
          <Box flex={1}>
            <SelectField label="Tier" collection={collection} value={[prize.tier]} onValueChange={(event) => setPrize((prev) => ({ ...prev, tier: event.value[0] }))} />
          </Box>
          <NumericField flex={1} label="Count" value={prize.count.toString()} onChange={(event) => setPrize((prev) => ({ ...prev, count: Number(event.target.value) }))} />
        </HStack>
        <HStack w="100%">
          <CheckboxField flex={1} label="Drawable" checked={prize.isDrawable} onChange={(event) => setPrize((prev) => ({ ...prev, isDrawable: !!event.checked }))} />
          <Box flex={1} />
        </HStack>
        <Button alignSelf="flex-end" onClick={onSubmit} loading={loading}>Submit</Button>
      </VStack>
    </Container>
  )
}

export default PrizeEdit

