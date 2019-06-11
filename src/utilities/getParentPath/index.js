import { replace } from 'ramda'

const getParentPath = replace(/\/[-a-z0-9]+$/, '')

export default getParentPath
