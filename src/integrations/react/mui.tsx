/** @jsxImportSource react */

import { qwikify$ } from '@builder.io/qwik-react'
import MUIBox from '@mui/material/Box'
import MUIButton from '@mui/material/Button'
import MUISlider from '@mui/material/Slider'

export const Box = qwikify$(MUIBox)
export const Button = qwikify$(MUIButton)
export const Slider = qwikify$(MUISlider, { eagerness: 'hover' })
