import * as React from 'react'
import Iframe from 'react-iframe'

export default function Sandbox ({ url }) {
  return (
    <Iframe
      url={url}
      width='40vw'
      height='60vh'
      display='initial'
      position='relative'
      sandbox='allow-modals allow-forms allow-popups allow-scripts allow-same-origin'
      allowFullScreen
    />
  )
}
