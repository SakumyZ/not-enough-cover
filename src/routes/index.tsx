import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import Home from '../components/home/home'

export default component$(() => {
  return (
    <>
      <Home client:only />
    </>
  )
})

export const head: DocumentHead = {
  title: 'Not Enough Cover',
  meta: [
    {
      name: 'description',
      content: 'Cover Generator'
    }
  ]
}
