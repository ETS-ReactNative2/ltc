import * as React from 'react'

import blueGrey from '@material-ui/core/colors/blueGrey'
import { createMuiTheme } from '@material-ui/core/styles'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'

import Drawer from './Drawer'
import Footer from './Footer'
import TitleBar from './TitleBar'

const { useState } = React

const theme = createMuiTheme({
  palette: {
    primary: blueGrey,
    secondary: { main: '#cfd8dc' }
  }
})

export default function TestLayout () {
  const [drawerState, setDrawerState] = useState(false)
  const toggleDrawer = () => setDrawerState(!drawerState)

  return (
    <MuiThemeProvider theme={theme}>
      <TitleBar toggleDrawer={toggleDrawer} />
      <Drawer drawerState={drawerState} toggleDrawer={toggleDrawer} />
      <Footer />
    </MuiThemeProvider>
  )
}
