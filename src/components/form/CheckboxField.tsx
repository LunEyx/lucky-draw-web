'use client'

import { Field } from "@/components/ui/field"
import { ChangeEvent } from "react"
import { Checkbox } from "../ui/checkbox"

interface CheckboxFieldProps extends Omit<Field.RootProps, 'onChange'> {
  label: string
  checked: boolean
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const CheckboxField = (props: CheckboxFieldProps) => {
  const { label, checked, onChange, ...fieldRootProps } = props

  return (
    <Field.Root {...fieldRootProps}>
      <Field.Label>{label}</Field.Label>
      <Field.Input type="checkbox" checked={checked} onChange={onChange} asChild>
        <Checkbox >
          IsDrawable
        </Checkbox>
      </Field.Input>
    </Field.Root>
  )
}

export default CheckboxField

