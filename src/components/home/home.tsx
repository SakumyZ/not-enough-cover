/** @jsxImportSource react */

import { qwikify$ } from '@builder.io/qwik-react'
import Grid from '@mui/material/Grid'
import Input from '~/components/common/Input/Input'
import Button from '@mui/material/Button'

export default qwikify$(() => {
  return (
    <Grid container sx={{ height: '100%' }}>
      <Grid item xl={3} sx={{ borderRight: '1px solid' }}>
        {/* row 1 */}
        <Grid container>
          <Grid item xl={6}>
            <Input label="主标题" />
          </Grid>
          <Grid item xl={6}>
            <Input label="副标题" />
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
        <Button
          onClick={() => {
            console.log(111)
          }}
        >
          11
        </Button>
      </Grid>
    </Grid>
  )
})
