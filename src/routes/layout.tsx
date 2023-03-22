import { component$, Slot } from '@builder.io/qwik'
import { loader$ } from '@builder.io/qwik-city'

import Header from '../components/header/header'
import {Box} from '~/integrations/react/mui'

export const serverTimeLoader = loader$(() => {
  return {
    date: new Date().toISOString()
  }
})

export default component$(() => {
  const serverTime = serverTimeLoader.use()
  return (
    <>
      <main>
        <Header />
        <Box component='section' height='calc(100vh - 60px - 77px)'>
          <Slot />
        </Box>
      </main>
      <footer>
        <a href="https://www.builder.io/" target="_blank">
          Made with ♡ by Builder.io
          <div>{serverTime.value.date}</div>
        </a>
      </footer>
    </>
  )
})
