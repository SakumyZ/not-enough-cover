/** @jsxImportSource react */

import { qwikify$ } from '@builder.io/qwik-react'
import MuiCssBaseline from '@mui/material/CssBaseline'
import MUIBox from '@mui/material/Box'
import MUIButton from '@mui/material/Button'
import MUISlider from '@mui/material/Slider'
import MUILink from '@mui/material/Link'
import MUIPaper from '@mui/material/Paper'
import MUISwitch from '@mui/material/Switch';
import MUITextField from '@mui/material/TextField';

export const CssBaseline = qwikify$(MuiCssBaseline)
export const Box = qwikify$(MUIBox)
export const Button = qwikify$(MUIButton)
export const Slider = qwikify$(MUISlider, { eagerness: 'hover' })
export const Link = qwikify$(MUILink, { eagerness: 'hover' })
export const Paper = qwikify$(MUIPaper)
export const Switch = qwikify$(MUISwitch)
export const TextField = qwikify$(MUITextField)