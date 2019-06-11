import { map } from 'ramda'

export default function mapPathsToLinkData (paths, pathMap) {
  try {
    return map(path => pathMap[path], paths)
  } catch (e) {
    return []
  }
}
