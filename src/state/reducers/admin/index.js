import {
  CHANGE_REDONE,
  CHANGE_UNDONE,
  VALUE_CHANGED,
  VALUE_CLEARED,
  VALUE_RESET,
  initialState
} from '../../constants'
import clearValue from '../../domain/clearValue'
import redoChanges from '../../domain/redoChanges'
import resetValue from '../../domain/resetValue'
import undoChanges from '../../domain/undoChanges'
import updateValue from '../../domain/updateValue'

export default function reducer (state = initialState, { payload, type }) {
  switch (type) {
    case CHANGE_REDONE:
      return redoChanges(state, payload)

    case CHANGE_UNDONE:
      return undoChanges(state, payload)

    case VALUE_CHANGED:
      return updateValue(state, payload)

    case VALUE_CLEARED:
      return clearValue(state, payload)

    case VALUE_RESET:
      return resetValue(state, payload)

    default:
      return state
  }
}
