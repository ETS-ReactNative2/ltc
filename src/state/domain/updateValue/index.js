import { lensPath, not, set, view } from 'ramda'

export default function updateValue (state, { name, newValue, parentId } = {}) {
  if (not(parentId) || not(name)) {
    return state
  }

  const valuePath = lensPath(['formData', parentId, name, 'value'])
  const undoPath = lensPath(['formData', parentId, name, 'undo'])
  const currentUndo = view(undoPath, state) || []
  const oldValue = view(valuePath, state)
  const undoUpdated = oldValue
    ? set(undoPath, [oldValue, ...currentUndo], state)
    : currentUndo

  return set(valuePath, newValue, undoUpdated)
}
