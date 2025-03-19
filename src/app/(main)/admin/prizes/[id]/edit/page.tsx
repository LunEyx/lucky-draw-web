'use client'

import CheckboxField from "@/components/form/CheckboxField"
import InputField from "@/components/form/InputField"
import NumericField from "@/components/form/NumericField"
import SelectField from "@/components/form/SelectField"
import { Button } from "@/components/ui/button"
import { getPrize, updatePrize } from "@/services/prize"
import { createListCollection } from "@ark-ui/react"
import { useRouter, useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { Box, Container, HStack, VStack } from "styled-system/jsx"

const EditPrizePage = () => {
  const router = useRouter()
  const params = useParams()
  const id = params.id

  const [prize, setPrize] = useState({ Id: '', Name: '', ImageURL: '', Tier: '', Count: 0, IsDrawable: false } as Prize)

  useEffect(() => {
    const fetchPrize = async () => {
      const prize = await getPrize(id as string)
      setPrize(prize)
    }

    if (id) { // TODO: auth
      fetchPrize()
    }
  }, [id])

  const onSubmit = async () => {
    await updatePrize('idtoken', prize) // TODO: auth
    router.push('/admin/prizes')
  }

  const collection = createListCollection({
    items: [
      { label: 'R', value: 'R' },
      { label: 'SR', value: 'SR' },
      { label: 'SSR', value: 'SSR' },
    ]
  })

  return (
    <Container>
      <VStack>
        <HStack w="100%">
          <InputField flex={1} label="Name" value={prize.Name} onChange={(event) => setPrize((prev) => ({ ...prev, Name: event.target.value }))} />
          <InputField flex={1} label="Image URL" value={prize.ImageURL} onChange={(event) => setPrize((prev) => ({ ...prev, ImageURL: event.target.value }))} />
        </HStack>
        <HStack w="100%">
          <Box flex={1}>
            <SelectField label="Tier" collection={collection} value={[prize.Tier]} onValueChange={(event) => setPrize((prev) => ({ ...prev, Tier: event.value[0] }))} />
          </Box>
          <NumericField flex={1} label="Count" value={prize.Count.toString()} onChange={(event) => setPrize((prev) => ({ ...prev, Count: Number(event.target.value) }))} />
        </HStack>
        <HStack w="100%">
          <CheckboxField flex={1} label="Drawable" checked={prize.IsDrawable} onChange={(event) => setPrize((prev) => ({ ...prev, IsDrawable: event.target.checked }))} />
          <Box flex={1} />
        </HStack>
        <Button alignSelf="flex-end" onClick={onSubmit}>Submit</Button>
      </VStack>
    </Container>
  )
}

export default EditPrizePage
