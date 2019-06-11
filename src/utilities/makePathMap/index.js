import { reduce } from 'ramda'

const makePathMap = reduce((acc, row) => ({ ...acc, [row.fullPath]: row }), {})

export default makePathMap
