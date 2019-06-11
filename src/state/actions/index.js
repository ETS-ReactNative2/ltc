import {
  BADGE_COMPLETE,
  BAD_GUESS,
  CHANGE_REDONE,
  CHANGE_UNDONE,
  GOAL_COMPLETE,
  STEP_COMPLETE,
  TOGGLE_DRAWER,
  TOGGLE_PASSWORD,
  TRACK_COMPLETE,
  UPDATE_DRAFT,
  VALUE_CHANGED,
  VALUE_CLEARED,
  VALUE_RESET
} from '../constants'

// Client actions
export function badGuess (answerId) {
  return {
    type: BAD_GUESS,
    payload: {
      answerId
    }
  }
}

export function badgeComplete (badgeId, nextBadge) {
  return {
    type: BADGE_COMPLETE,
    payload: {
      badgeId,
      nextBadge
    }
  }
}

export function goalComplete (goalId, nextGoal) {
  return {
    type: GOAL_COMPLETE,
    payload: {
      goalId,
      nextGoal
    }
  }
}

export function stepComplete (stepId, nextStep) {
  return {
    type: STEP_COMPLETE,
    payload: {
      stepId,
      nextStep
    }
  }
}

export function toggleDrawer () {
  return {
    type: TOGGLE_DRAWER
  }
}

export function togglePassword () {
  return {
    type: TOGGLE_PASSWORD
  }
}

export function trackComplete (trackId) {
  return {
    type: TRACK_COMPLETE,
    payload: {
      trackId
    }
  }
}

// Admin actions
export function changeRedone (parentId, fieldName) {
  return {
    type: CHANGE_REDONE,
    payload: {
      parentId,
      fieldName
    }
  }
}

export function changeUndone (parentId, fieldName) {
  return {
    type: CHANGE_UNDONE,
    payload: {
      parentId,
      fieldName
    }
  }
}

export function updateDraft (editorState) {
  return {
    type: UPDATE_DRAFT,
    payload: {
      editorState
    }
  }
}

export function valueChanged (parentId, fieldName, newValue) {
  return {
    type: VALUE_CHANGED,
    payload: {
      parentId,
      fieldName,
      newValue
    }
  }
}

export function valueCleared (parentId, fieldName) {
  return {
    type: VALUE_CLEARED,
    payload: {
      parentId,
      fieldName
    }
  }
}

export function valueReset (parentId, fieldName) {
  return {
    type: VALUE_RESET,
    payload: {
      parentId,
      fieldName
    }
  }
}
