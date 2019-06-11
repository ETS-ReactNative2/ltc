import { lensPath, not, pipe, set, view } from 'ramda'

export default function redoChanges (state, { name, parentId } = {}) {
  if (not(parentId) || not(name)) {
    return state
  }

  const valuePath = lensPath(['formData', parentId, name, 'value'])
  const undoPath = lensPath(['formData', parentId, name, 'undo'])
  const redoPath = lensPath(['formData', parentId, name, 'redo'])
  const currentUndo = view(undoPath, state) || []
  const currentRedo = view(redoPath, state) || []
  const currentValue = view(valuePath, state)
  const newUndo = [currentValue, ...currentUndo]
  const [newValue, ...newRedo] = currentRedo

  return pipe(
    set(redoPath, newRedo),
    set(undoPath, newUndo),
    set(valuePath, newValue)
  )(state)
}
