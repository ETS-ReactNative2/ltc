import { compose } from 'react-apollo'

import withInterceptor from '../withInterceptor'

import Error from './Error'
import Loading from './Loading'

const withQuery = compose(
  withInterceptor(Loading),
  withInterceptor(Error, 'error')
)

export default withQuery
