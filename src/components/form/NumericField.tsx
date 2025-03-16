'use client'

import { Field } from "@/components/ui/field"
import { ChangeEvent } from "react"

interface NumericFieldProps extends Omit<Field.RootProps, 'onChange'> {
  label: string
  value: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const NumericField = (props: NumericFieldProps) => {
  const { label, value, onChange, ...fieldRootProps } = props

  return (
    <Field.Root {...fieldRootProps}>
      <Field.Label>{label}</Field.Label>
      <Field.Input type="number" value={value} onChange={onChange} />
    </Field.Root>
  )
}

export default NumericField
