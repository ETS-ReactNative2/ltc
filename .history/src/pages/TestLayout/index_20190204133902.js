import * as React from 'react'

import blueGrey from '@material-ui/core/colors/blueGrey'
import { createMuiTheme } from '@material-ui/core/styles'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'

import Footer from './Footer'
import TitleBar from './TitleBar'

const theme = createMuiTheme({
  palette: {
    primary: blueGrey,
    secondary: '#cfd8dc'
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
