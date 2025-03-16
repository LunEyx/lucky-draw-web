'use client'

import { Field } from "@/components/ui/field"
import { ChangeEvent } from "react"

interface InputFieldProps extends Omit<Field.RootProps, 'onChange'> {
  label: string
  value: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const InputField = (props: InputFieldProps) => {
  const { label, value, onChange, ...fieldRootProps } = props

  return (
    <Field.Root {...fieldRootProps}>
      <Field.Label>{label}</Field.Label>
      <Field.Input value={value} onChange={onChange} />
    </Field.Root>
  )
}

export default InputField
