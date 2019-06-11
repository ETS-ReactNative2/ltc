import * as React from 'react'
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
import { storage } from 'local-storage-fallback'

import Switchyard from '../Switchyard'

import '../../styles/css/solid.css'

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
        // eslint-disable-next-line no-console
        if (networkError) console.error(`[Network error]: ${networkError}`)
      }),
      httpLink
    ])
  ),
  cache: new InMemoryCache({
    addTypename: true
  })
})

export default function SiteWrapper () {
  return (
    <ApolloProvider client={client}>
      <Switchyard />
    </ApolloProvider>
  )
}
