/** @jsxImportSource react */

import { useEffect, useState } from 'react'
import { qwikify$ } from '@builder.io/qwik-react'
import Grid from '@mui/material/Grid'
import Form, { useForm } from '~/components/common/Form/Form'
import Input from '~/components/common/Input/Input'
import Canvas from '~/components/Canvas/Canvas'

interface FormData {
  title: string
  subtitle: string
}

export default qwikify$(() => {
  const defaultValues: FormData = { title: '', subtitle: '' }

  const formProps = useForm<FormData>({
    defaultValues
  })

  const { watch } = formProps

  const [form, setForm] = useState<FormData>(defaultValues)

  useEffect(() => {
    const subscription = watch!(value => {
      setForm(value as any)
    })

    return () => subscription.unsubscribe()
  }, [watch])

  return (
    <Form {...formProps}>
      <Grid container spacing={2} sx={{ height: '100%' }}>
        <Grid item xl={3} sx={{ borderRight: '1px solid' }}>
          {/* row 1 */}
          <Grid container spacing={2}>
            <Grid item xl={6}>
              <Input label="主标题" name="title" />
            </Grid>
            <Grid item xl={6}>
              <Input label="副标题" name="subtitle" />
            </Grid>
          </Grid>
          {/* row 2 */}
          <Grid container>
            <Grid item xl={6}>
              <Input label="尺寸：宽" />
            </Grid>
            <Grid item xl={6}>
              <Input label="尺寸：高" />
            </Grid>
          </Grid>
          {/* row 3 */}
          <Grid container>
            <Grid item xl={6}>
              <Input label="背景色" />
            </Grid>
            <Grid item xl={6}>
              <Input label="背景图" />
            </Grid>
          </Grid>

          <Input label="高级模式" />
        </Grid>
        <Grid item xl={9}>
          <Canvas {...form} />
        </Grid>
      </Grid>
    </Form>
  )
})
