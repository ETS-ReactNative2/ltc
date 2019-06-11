import * as React from 'react'
import {
  ConnectedRouter,
  routerMiddleware
} from 'connected-react-router'
import { applyMiddleware, compose, createStore } from 'redux'
import { Provider } from 'react-redux'
import { createEpicMiddleware } from 'redux-observable'
import { ApolloProvider } from 'react-apollo'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faCaretSquareDown,
  faSquare,
  faTrashAlt
} from '@fortawesome/free-regular-svg-icons'
import {
  faArrowCircleDown,
  faArrowCircleUp,
  faArrowRight,
  faCheckSquare,
  faEdit,
  faRedoAlt,
  faSave,
  faTimes,
  faUndoAlt
} from '@fortawesome/free-solid-svg-icons'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-client'
import { ApolloLink } from 'apollo-link'
import { setContext } from 'apollo-link-context'
import { onError } from 'apollo-link-error'
import { HttpLink } from 'apollo-link-http'
import { createBrowserHistory } from 'history'
import { storage } from 'local-storage-fallback'

import { initialState } from '../../state/constants'
import rootEpic from '../../state/epics'
import createRootReducer from '../../state/reducers'
import Switchyard from '../Switchyard'

import '../../styles/css/solid.css'

const history = createBrowserHistory()
const epicMiddleware = createEpicMiddleware()
const appliedMiddleware = applyMiddleware(
  epicMiddleware,
  routerMiddleware(history)
)
const devTools =
  typeof window !== 'undefined' &&
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__()
const middleware = devTools
  ? compose(appliedMiddleware, devTools)
  : compose(appliedMiddleware)
const store = createStore(
  createRootReducer(history),
  initialState,
  middleware
)

epicMiddleware.run(rootEpic)

library.add(
  faArrowCircleDown,
  faArrowCircleUp,
  faArrowRight,
  faCaretSquareDown,
  faCheckSquare,
  faEdit,
  faRedoAlt,
  faSave,
  faSquare,
  faTimes,
  faTrashAlt,
  faUndoAlt
)

const httpLink = new HttpLink({ uri: process.env.REACT_APP_LT_SERVER_URL })

// eslint-disable-next-line no-unused-vars
const authLink = setContext((_, { headers }) => {
  const jwtToken = storage.getItem('jwtToken')

  return {
    headers: jwtToken
      ? {
        ...headers,
        authorization: `Bearer ${jwtToken}`
      }
      : {
        ...headers
      }
  }
})

const client = new ApolloClient({
  link: authLink.concat(
    ApolloLink.from([
      onError(({ /* graphQLErrors, */ networkError }) => {
        // if (graphQLErrors) {
        //   graphQLErrors.map(({ message, locations, path }) =>
        //     console.error(
        //       `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        //     )
        //   )
        // }
        if (networkError) console.error(`[Network error]: ${networkError}`)
      }),
      httpLink
    ])
  ),
  cache: new InMemoryCache({
    addTypename: true
  })
})

export default function Site () {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Switchyard />
        </ConnectedRouter>
      </Provider>
    </ApolloProvider>
  )
}
