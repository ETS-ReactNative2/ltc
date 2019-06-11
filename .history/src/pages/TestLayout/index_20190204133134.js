import * as React from 'react'

import teal from '@material-ui/core/colors/teal'
import { createMuiTheme } from '@material-ui/core/styles'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'

import Footer from './Footer'
import TitleBar from './TitleBar'

const theme = createMuiTheme({
  palette: {
    primary: teal
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
