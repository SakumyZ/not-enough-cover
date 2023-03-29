import type { ThemeOptions } from '@mui/material/styles'

const theme: ThemeOptions = {
  components: {
    MuiStack: {
      defaultProps: {
        spacing: 2,
        direction: 'row'
      }
    }
  }
}

export default theme
