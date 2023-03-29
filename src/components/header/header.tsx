// import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { component$ } from '@builder.io/qwik'
import classes from './header.module.css'
import { Box, Link, Stack } from '~/integrations/react/mui'
import github from '~/assets/imgs/github.svg'
import logo from '~/assets/imgs/logo.png'

export default component$(() => {
  return (
    <Box component="header" className={`${classes.header}`}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ px: 2 }}>
        <Link href="/" underline="none">
          <img src={logo} style={{ marginBottom: '-7px' }}></img>
        </Link>

        <Link href="https://github.com/SakumyZ/not-enough-cover" target="_blank" display="flex">
          <img src={github} alt="" width={40} />
        </Link>
      </Stack>
      <Box className={`${classes.logo}`}></Box>
    </Box>
  )
})
