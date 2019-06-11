import * as React from 'react'

import LinkInternal from '../Link/LinkInternal'
import LinkPlaceholder from '../Link/LinkPlaceholder'

export default function Logo ({ fullPath }) {
  return fullPath === '/'
    ? <LinkPlaceholder logo>Learning Tracks</LinkPlaceholder>
    : <LinkPlaceholder logo>
      <LinkInternal to='/' data-tip='To the home page'>
          Learning Tracks
      </LinkInternal>
    </LinkPlaceholder>
}
