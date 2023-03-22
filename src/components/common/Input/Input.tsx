/** @jsxImportSource react */

import React from 'react'
import type { TextFieldProps } from '@mui/material/TextField'
import TextField from '@mui/material/TextField'

interface InputProps {
  label: TextFieldProps['label']
}

const Input: React.FC<InputProps> = ({ label }) => {
  return <TextField label={label} variant="standard" autoComplete="fasle" />
}

export default Input
