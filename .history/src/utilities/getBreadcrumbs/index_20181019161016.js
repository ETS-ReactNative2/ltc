import { filter, identity, pipe } from 'ramda'
import { isNilOrEmpty } from 'ramda-adjunct'

import getParentPath from '../getParentPath'

function getBreadcrumbs (pathname, pathMap) {
  if (isNilOrEmpty(pathMap)) {
    return []
  }

  if (pathname === '' || pathname === '/') {
    return [pathMap['/']]
  }

  const parentPath = getParentPath(pathname)

  return [...getBreadcrumbs(parentPath, pathMap), pathMap[pathname]]
}

export default pipe(
  getBreadcrumbs,
  filter(identity)
)
