import * as React from 'react'
import ReactTooltip from 'react-tooltip'

import Reactify from '../Reactify'
import LinkInternal from '../Reactify/Link/LinkInternal'

export default function Layout (props) {
  const { page: { footer, header, main } = {} } = props

  return (
    <>
      {header && <Reactify html={header} {...props} />}
      {main && <Reactify html={main} {...props} />}
      <LinkInternal to='/test'>TEST</LinkInternal>
      {footer && <Reactify html={footer} {...props} />}
      <ReactTooltip
        className='react-tooltip'
        place='left'
        type='dark'
        effect='solid'
        border
        delayShow={300}
        delayUpdate={200}
      />
    </>
  )
}
