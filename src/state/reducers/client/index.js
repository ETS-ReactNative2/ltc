import { not } from 'ramda'

import {
  BADGE_COMPLETE,
  BAD_GUESS,
  GOAL_COMPLETE,
  STEP_COMPLETE,
  TOGGLE_DRAWER,
  TOGGLE_PASSWORD,
  TRACK_COMPLETE,
  UPDATE_DRAFT,
  initialState
} from '../../constants'

function reducer (state = initialState, { payload = {}, type }) {
  switch (type) {
    case BAD_GUESS:
      return {
        ...state,
        badGuesses: new Set([...state.badGuesses, payload.answerId])
      }
    case BADGE_COMPLETE:
      return {
        ...state,
        badgesCompleted: new Set([...state.badgesCompleted, payload.badgeId])
      }
    case GOAL_COMPLETE:
      return {
        ...state,
        goalsCompleted: new Set([...state.goalsCompleted, payload.goalId])
      }
    case STEP_COMPLETE:
      return {
        ...state,
        stepsCompleted: new Set([...state.stepsCompleted, payload.stepId])
      }
    case TOGGLE_DRAWER:
      return {
        ...state,
        drawerOpen: not(state.drawerOpen)
      }
    case TOGGLE_PASSWORD:
      return {
        ...state,
        passwordHidden: not(state.passwordHidden)
      }
    case TRACK_COMPLETE:
      return {
        ...state,
        tracksCompleted: new Set([...state.tracksCompleted, payload.trackId])
      }
    case UPDATE_DRAFT:
      return {
        ...state,
        editorState: payload.editorState
      }
    default:
      return state
  }
}

export default reducer
