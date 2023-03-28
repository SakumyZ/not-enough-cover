/** @jsxImportSource react */

import React, { useContext } from 'react'
import type { TextFieldProps } from '@mui/material/TextField'
import TextField from '@mui/material/TextField'
import { formContext } from '~/components/common/Form/Form'
import { Controller } from 'react-hook-form'

interface InputProps {
  label?: TextFieldProps['label']
  name?: string
  onChange?: TextFieldProps['onChange']
}

const Input: React.FC<InputProps> = ({ label, name, onChange: onSourceChange }) => {
  const { control } = useContext(formContext)

  return (
    <Controller
      control={control}
      name={name || ''}
      render={({ field: { onChange, value } }) => (
        <TextField
          label={label}
          variant="standard"
          autoComplete="fasle"
          name={name}
          value={value}
          onChange={event => {
            onChange(event.target.value)
            onSourceChange && onSourceChange(event as any)
          }}
        />
      )}
    />
  )
}

export default Input
