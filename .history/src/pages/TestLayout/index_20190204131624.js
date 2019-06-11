
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import blueGrey from '@material-ui/core/colors/blueGrey'
import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: blueGrey
  }
})

export default TestLayout () {
  return (
    <MuiThemeProvider theme={theme}>
      <TitleBar />
    </MuiThemeProvider>
  )
}
