// import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { component$ } from '@builder.io/qwik'
import classes from './header.module.css'
import { Box, Link, Stack } from '~/integrations/react/mui'
import github from '~/assets/imgs/github.svg'

export default component$(() => {
  return (
    <Box component="header" className={`${classes.header}`}>
      <Stack>
        <Link href="/" underline="none">
          Not Enough Cover
        </Link>

        <Link href="https://github.com/SakumyZ/not-enough-cover" target="_blank" display="flex">
          <img src={github} alt="" width={32} />
        </Link>
      </Stack>
      <Box className={`${classes.logo}`}></Box>
    </Box>
  )
})
