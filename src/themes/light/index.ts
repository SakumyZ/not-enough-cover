import type { ThemeOptions } from '@mui/material/styles'

const theme: ThemeOptions = {
  components: {
    MuiStack: {
      defaultProps: {
        direction: 'row'
      }
    }
  }
}

export default theme
