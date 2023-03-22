/** @jsxImportSource react */

import React, { useContext } from 'react'
import type { TextFieldProps } from '@mui/material/TextField'
import TextField from '@mui/material/TextField'
import { formContext } from '~/components/common/Form/Form'
import { Controller } from 'react-hook-form'

interface InputProps {
  label?: TextFieldProps['label']
  name?: string
}

const Input: React.FC<InputProps> = ({ label, name }) => {
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
          onChange={onChange}
        />
      )}
    />
  )
}

export default Input
