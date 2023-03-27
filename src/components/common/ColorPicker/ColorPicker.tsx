/** @jsxImportSource react */

import React, { useContext } from 'react'
import { formContext } from '~/components/common/Form/Form'
import { Controller } from 'react-hook-form'
import { MuiColorInput } from 'mui-color-input'

interface ColorPickerProps {
  name?: string
  label?: string
  tiny?: boolean
}

export const ColorPicker: React.FC<ColorPickerProps> = ({ name, label, tiny }) => {
  const { control } = useContext(formContext)

  return (
    <Controller
      control={control}
      name={name || ''}
      render={({ field }) => (
        <>
          {tiny ? (
            <MuiColorInput
              {...field}
              format="hex"
              sx={{ '.MuiInputBase-input,.MuiOutlinedInput-notchedOutline': { display: 'none' } }}
            />
          ) : (
            <MuiColorInput
              label={label}
              variant="standard"
              {...field}
              format="hex"
              onFocus={e => {
                e.stopPropagation()
              }}
            />
          )}
        </>
      )}
    />
  )
}

export default ColorPicker
