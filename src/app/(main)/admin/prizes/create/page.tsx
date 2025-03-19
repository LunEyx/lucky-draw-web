'use client'

import InputField from "@/components/form/InputField"
import NumericField from "@/components/form/NumericField"
import CheckboxField from "@/components/form/CheckboxField"
import { Box, Container, HStack, VStack } from "styled-system/jsx"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { createPrize } from "@/services/prize"

const CreatePrizePage = () => {
  const router = useRouter()

  const [prize, setPrize] = useState({ Id: '', Name: '', ImageURL: '', Tier: '', Count: 0, IsDrawable: false } as Prize)


  const onSubmit = async () => {
    await createPrize('idtoken', prize) // TODO: auth
    router.push('/admin/prizes')
  }

  return (
    <Container>
      <VStack>
        <HStack w="100%">
          <InputField flex={1} label="Name" value={prize.Name} onChange={(event) => setPrize((prev) => ({ ...prev, Name: event.target.value }))} />
          <InputField flex={1} label="Image URL" value={prize.ImageURL} onChange={(event) => setPrize((prev) => ({ ...prev, ImageURL: event.target.value }))} />
        </HStack>
        <HStack w="100%">
          <InputField flex={1} label="Tier" value={prize.Tier} onChange={(event) => setPrize((prev) => ({ ...prev, Tier: event.target.value }))} />
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

export default CreatePrizePage

