import * as React from 'react'

import blueGrey from '@material-ui/core/colors/blueGrey'
import indigo from '@material-ui/core/colors/indigo'
import { createMuiTheme } from '@material-ui/core/styles'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'

import Footer from './Footer'
import TitleBar from './TitleBar'

const theme = createMuiTheme({
  palette: {
    primary: blueGrey[600],
    secondary: indigo[400]
  }
})

export default function TestLayout () {
  return (
    <MuiThemeProvider theme={theme}>
      <TitleBar />
      <Footer />
    </MuiThemeProvider>
  )
}
