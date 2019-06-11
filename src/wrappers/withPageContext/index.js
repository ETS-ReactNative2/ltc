import { compose } from 'react-apollo'

import withInterceptor from '../withInterceptor'
import withPage from '../withPage'
import withQuery from '../withQuery'
import withSiteMap from '../withSiteMap'

import NotFound from './NotFound'

export default query =>
  compose(
    withSiteMap,
    withPage(query),
    withQuery,
    withInterceptor(NotFound, 'redirect')
  )
