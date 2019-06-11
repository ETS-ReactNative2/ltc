import { graphql } from 'react-apollo'

import { reduce } from 'ramda'

import pathsQuery from '../../gql/queries/paths.graphql'
import getBreadcrumbs from '../../utilities/getBreadcrumbs'
import makePathMap from '../../utilities/makePathMap'
import parseSearch from '../../utilities/parseSearch'

function mapPaths (data) {
  const {
    pathMap: {
      currentAccount,
      error,
      loading,
      allManagedPages: { nodes = [] } = {}
    } = {},
    ownProps: { location: { pathname, search } = {} } = {}
  } = data

  if (loading) return { loading }
  if (error) return { error }

  const pathMap = makePathMap(nodes)
  const params = parseSearch(search)

  const makeRowIdMap = reduce((acc, row) => ({ ...acc, [row.rowId]: row }), {})

  return {
    pathMap,
    breadcrumbTrail: getBreadcrumbs(pathname, pathMap, search),
    page: pathMap[pathname],
    currentAccount,
    rowIdMap: makeRowIdMap(nodes),
    params
  }
}

const withSiteMap = graphql(pathsQuery, {
  name: 'pathMap',
  props: mapPaths
})

export default withSiteMap
