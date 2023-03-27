/** @jsxImportSource react */

import { useEffect, useState, useRef } from 'react'
import { qwikify$ } from '@builder.io/qwik-react'
import Grid from '@mui/material/Grid'
import Form, { useForm } from '~/components/common/Form/Form'
import Input from '~/components/common/Input/Input'
import Button from '@mui/material/Button'
import ColorPicker from '~/components/common/ColorPicker/ColorPicker'
import Canvas from '~/components/Canvas/Canvas'
import type * as fabric from 'fabric' // v6

interface FormData {
  title: string
  subtitle: string
  backgroundColor: string
}

export default qwikify$(() => {
  const defaultValues: FormData = { title: '', subtitle: '', backgroundColor: '#fff' }

  const formProps = useForm<FormData>({
    defaultValues
  })

  const canvasRef = useRef<fabric.Canvas | null>(null)

  const { watch } = formProps

  const [form, setForm] = useState<FormData>(defaultValues)

  useEffect(() => {
    const subscription = watch!(value => {
      setForm(value as any)
    })

    return () => subscription.unsubscribe()
  }, [watch])

  function donwloadImg(url: string) {
    const a = document.createElement('a')
    a.href = url
    a.download = 'canvas.jpg'
    a.click()
    a.remove()
  }

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
              {/* <Input label="背景色" name="backgroundColor" /> */}
              <ColorPicker label="背景色" name="backgroundColor" />
            </Grid>
            <Grid item xl={6}>
              <Input label="背景图" />
            </Grid>
          </Grid>

          {/* row 4 */}
          <Grid container>
            <Grid item xl={6}>
              <Input label="高级模式" />
            </Grid>
            <Grid item xl={6}>
              {/**
               * bilibi
               * youtube
               * custom
               */}
              <Input label="预设" />
            </Grid>
          </Grid>

          {/* row 5 */}
          <Grid container>
            <Grid item xl={6}>
              <Button
                variant="contained"
                onClick={() => {
                  if (!canvasRef.current) return

                  const url = canvasRef.current.toDataURL({
                    format: 'jpeg',
                    quality: 1
                  })

                  donwloadImg(url)
                }}
              >
                导出
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xl={9}>
          <Canvas
            {...form}
            onChange={canvas => {
              canvasRef.current = canvas
            }}
          />
        </Grid>
      </Grid>
    </Form>
  )
})
