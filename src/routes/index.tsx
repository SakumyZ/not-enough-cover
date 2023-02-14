import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import { Button } from '~/integrations/react/mui'

export default component$(() => {
  return <Button>Init</Button>
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
