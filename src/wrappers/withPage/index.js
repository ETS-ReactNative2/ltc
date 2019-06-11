import { graphql } from 'react-apollo'

import { head, isNil, replace } from 'ramda'

function getNodes ({ allManagedPages }) {
  const { nodes } = allManagedPages

  return nodes
}

function getPage (props) {
  const {
    page: { error, loading, ...data } = {},
    ownProps: {
      breadcrumbTrail = [],
      location: { search = '' } = {},
      pathMap = {}
    } = {}
  } = props
  if (loading) return { loading }
  if (error) return { error }

  const nodes = getNodes(data)
  const page = head(nodes)
  const returnPath = replace(/^\?from=/, '', search)
  const trail = returnPath ? [pathMap[returnPath], page] : breadcrumbTrail

  if (isNil(page)) {
    return { redirect: true }
  }

  return {
    breadcrumbTrail: trail,
    page
  }
}

const withPage = query =>
  graphql(query, {
    name: 'page',
    options: ({ location: { pathname: fullPath = '/' } = {} }) => ({
      variables: {
        fullPath
      }
    }),
    props: getPage
  })

export default withPage
