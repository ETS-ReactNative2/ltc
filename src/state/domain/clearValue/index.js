import { lensPath, not, pipe, reverse, set, view } from 'ramda'

export default function clearValue (state, { name, parentId } = {}) {
  if (not(parentId) || not(name)) {
    return state
  }

  const valuePath = lensPath(['formData', parentId, name, 'value'])
  const undoPath = lensPath(['formData', parentId, name, 'undo'])
  const redoPath = lensPath(['formData', parentId, name, 'redo'])
  const currentUndo = view(undoPath, state) || []
  const currentRedo = view(redoPath, state) || []
  const currentValue = view(valuePath, state)
  const newRedo = [...reverse(currentUndo), currentValue, ...currentRedo]

  return pipe(
    set(redoPath, newRedo),
    set(undoPath, []),
    set(valuePath, undefined)
  )(state)
}
