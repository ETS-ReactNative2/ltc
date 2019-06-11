import * as React from 'react'
import { Redirect } from 'react-router'

import getParentPath from '../../../utilities/getParentPath'

export default function NotFound ({ location: { pathname = '' } = {} }) {
  if (pathname === '/' || pathname === '') {
    return <Redirect to='/lost' />
  }
  return <Redirect to={getParentPath(pathname)} />
}
