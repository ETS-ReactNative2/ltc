import { lensPath, not, pipe, set } from 'ramda'

export default function resetValue (state, { name, parentId } = {}) {
  if (not(parentId) || not(name)) {
    return state
  }

  const valuePath = lensPath(['formData', parentId, name, 'value'])
  const undoPath = lensPath(['formData', parentId, name, 'undo'])
  const redoPath = lensPath(['formData', parentId, name, 'redo'])

  return pipe(set(redoPath, []), set(undoPath, []), set(valuePath, undefined))(
    state
  )
}
