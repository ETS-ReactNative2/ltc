import { lensPath, not, pipe, set, view } from 'ramda'

export default function undoChanges (state, { name, parentId } = {}) {
  if (not(parentId) || not(name)) {
    return state
  }

  const valuePath = lensPath(['formData', parentId, name, 'value'])
  const undoPath = lensPath(['formData', parentId, name, 'undo'])
  const redoPath = lensPath(['formData', parentId, name, 'redo'])
  const currentUndo = view(undoPath, state) || []
  const currentRedo = view(redoPath, state) || []
  const currentValue = view(valuePath, state)
  const [newValue, ...newUndo] = currentUndo
  const newRedo = [currentValue, ...currentRedo]

  return pipe(
    set(undoPath, newUndo),
    set(redoPath, newRedo),
    set(valuePath, newValue)
  )(state)
}
