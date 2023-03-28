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
import Select from '~/components/common/Select'
import Upload from '~/components/common/Upload'

interface FormData {
  width: number
  height: number
  title: string
  subtitle: string
  backgroundColor: string
  preset: string
  backgroundImage: string
}

export default qwikify$(() => {
  const defaultValues: FormData = {
    width: 800,
    height: 400,
    title: '',
    subtitle: '',
    backgroundColor: '#fff',
    preset: '',
    backgroundImage: ''
  }

  const formProps = useForm<FormData>({
    defaultValues
  })

  const canvasRef = useRef<fabric.Canvas | null>(null)

  const { watch, setValue } = formProps

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
              <Input
                label="尺寸：宽"
                name="width"
                onChange={() => {
                  setValue('preset', '')
                }}
              />
            </Grid>
            <Grid item xl={6}>
              <Input
                label="尺寸：高"
                name="height"
                onChange={() => {
                  setValue('preset', '')
                }}
              />
            </Grid>
          </Grid>
          {/* row 3 */}
          <Grid container>
            <Grid item xl={6}>
              <ColorPicker label="背景色" name="backgroundColor" />
            </Grid>
            <Grid item xl={6}>
              <Upload
                onBeforeUpload={files => {
                  console.log(files[0])
                  // 将文件转换为 objeturl
                  const url = URL.createObjectURL(files[0])
                  setValue('backgroundImage', url)
                  return false
                }}
              >
                上传背景图
              </Upload>
            </Grid>
          </Grid>

          {/* row 4 */}
          <Grid container>
            <Grid item xl={6}>
              <Input label="高级模式" />
            </Grid>
            <Grid item xl={6}>
              {/**
               * bilibi 1146 * 717
               * youtube
               * custom
               */}
              {/* <Input label="预设" /> */}
              <Select
                label="预设"
                name="preset"
                options={[
                  { value: '', label: 'None' },
                  { value: '1', label: 'Bilibili - 1146 * 717' },
                  { value: '2', label: 'Youtube' },
                  { value: '3', label: 'Custom' }
                ]}
                onChange={value => {
                  console.log(value)
                  const map: Record<any, { height: number; width: number }> = {
                    1: { width: 1146, height: 717 }
                  }

                  setValue('width', map[value].width)
                  setValue('height', map[value].height)
                }}
              />
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
