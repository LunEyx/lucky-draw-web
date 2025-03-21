'use client'

import { Field } from "@/components/ui/field"
import { Checkbox } from "../ui/checkbox"
import { CheckboxCheckedChangeDetails } from "@ark-ui/react"

interface CheckboxFieldProps extends Omit<Field.RootProps, 'onChange'> {
  label: string
  checked: boolean
  onChange: (details: CheckboxCheckedChangeDetails) => void
}

const CheckboxField = (props: CheckboxFieldProps) => {
  const { label, checked, onChange, ...fieldRootProps } = props

  return (
    <Field.Root {...fieldRootProps}>
      <Field.Label>{label}</Field.Label>
      <Checkbox checked={checked} onCheckedChange={onChange} >
        IsDrawable
      </Checkbox>
    </Field.Root>
  )
}

export default CheckboxField

