/** @jsxImportSource react */

import React, { useContext } from 'react'
import { Controller } from 'react-hook-form'
import MuiSelect from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import { formContext } from '~/components/common/Form/Form'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'

interface SelectProps {
  label?: string
  name?: string
  options: { value: string; label: string }[]
  onChange?: (value: string, event: React.MouseEvent) => void
}

const Select: React.FC<SelectProps> = ({ label, name, options = [], onChange: onPopsChange }) => {
  const { control } = useContext(formContext)

  return (
    <Controller
      control={control}
      name={name || ''}
      render={({ field: { onChange, value } }) => (
        <FormControl fullWidth>
          <InputLabel>{label}</InputLabel>
          <MuiSelect
            variant="standard"
            value={value}
            sx={{ width: '195px' }}
            onChange={event => {
              onChange(event.target.value)
              onPopsChange && onPopsChange(event.target.value, event as any)
            }}
          >
            {options.map(item => {
              return (
                <MenuItem key={item.value} value={item.value}>
                  {item.label}
                </MenuItem>
              )
            })}
          </MuiSelect>
        </FormControl>
      )}
    />
  )
}

export default Select
