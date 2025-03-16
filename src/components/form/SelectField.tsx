'use client'

import { Select } from "@/components/ui/select"
import { ListCollection, SelectRootProps } from "@ark-ui/react"
import { CheckIcon, ChevronsUpDownIcon } from "lucide-react"

interface SelectFieldProps extends SelectRootProps<string> {
  label: string
  placeholder?: string
  collection: ListCollection
}

const SelectField = (props: SelectFieldProps) => {
  const { label, placeholder, collection, ...selectRootProps } = props

  return (
    <Select.Root positioning={{ sameWidth: true }} collection={collection} {...selectRootProps}>
      <Select.Label>{label}</Select.Label>
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder={placeholder} />
          <ChevronsUpDownIcon />
        </Select.Trigger>
      </Select.Control>
      <Select.Positioner>
        <Select.Content>
          <Select.ItemGroup>
            {collection.items.map((item) => (
              <Select.Item key={item.value} item={item}>
                <Select.ItemText>{item.label}</Select.ItemText>
                <Select.ItemIndicator>
                  <CheckIcon />
                </Select.ItemIndicator>
              </Select.Item>
            ))}
          </Select.ItemGroup>
        </Select.Content>
      </Select.Positioner>
    </Select.Root>
  )
}

export default SelectField

