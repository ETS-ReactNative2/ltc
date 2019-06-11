import '@babel/polyfill'

import * as React from 'react'
import { render } from 'react-dom'

import SiteWrapper from './components/SiteWrapper'
import { unregister } from './serviceWorker'
import GlobalStyle from './styles'

import './@bnz/serrano-web-fonts/serrano.css'
import './styles/react-draft-wysiwyg.css'

function renderApp () {
  render(
    <>
      <SiteWrapper />
      <GlobalStyle />
    </>,
    document.getElementById('root')
  )
}

renderApp()
unregister()
