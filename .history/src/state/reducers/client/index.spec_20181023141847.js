import { initialState, rootReducer } from '.'
import {
  badgeComplete,
  badGuess,
  goalComplete,
  stepComplete,
  toggleDrawer,
  togglePassword,
  trackComplete
} from '..'

describe('state:reducers', () => {
  describe('rootReducer', () => {
    it('defaults to the initialState', () => {
      expect(rootReducer(undefined, {})).toMatchObject(initialState)
    })

    it('handles an unknown action type by returning the state unchanged', () => {
      const state = 'state'

      expect(rootReducer(state, {})).toBe(state)
    })

    it('adds a badge to the badgesCompleted list', () => {
      const badgeId = 'd'
      const badgesCompleted = ['a', 'b', 'c']
      const state = { badgesCompleted }

      expect(rootReducer(state, badgeComplete(badgeId))).toMatchObject({
        badgesCompleted: new Set([...badgesCompleted, badgeId])
      })
    })

    it('adds a guess to the badGuesses list', () => {
      const answerId = 'd'
      const badGuesses = ['a', 'b', 'c']
      const state = { badGuesses }

      expect(rootReducer(state, badGuess(answerId))).toMatchObject({
        badGuesses: new Set([...badGuesses, answerId])
      })
    })

    it('adds a goal to the goalsCompleted list', () => {
      const goalId = 'd'
      const goalsCompleted = ['a', 'b', 'c']
      const state = { goalsCompleted }

      expect(rootReducer(state, goalComplete(goalId))).toMatchObject({
        goalsCompleted: new Set([...goalsCompleted, goalId])
      })
    })

    it('adds a step to the stepsCompleted list', () => {
      const stepId = 'd'
      const stepsCompleted = ['a', 'b', 'c']
      const state = { stepsCompleted }

      expect(rootReducer(state, stepComplete(stepId))).toMatchObject({
        stepsCompleted: new Set([...stepsCompleted, stepId])
      })
    })

    it('toggles drawer from open to shut', () => {
      const state = {
        drawerOpen: true
      }

      expect(rootReducer(state, toggleDrawer())).toMatchObject({
        drawerOpen: false
      })
    })

    it('toggles drawer from shut to open', () => {
      const state = {
        drawerOpen: false
      }

      expect(rootReducer(state, toggleDrawer())).toMatchObject({
        drawerOpen: true
      })
    })

    it('toggles password from hidden to visible', () => {
      const state = {
        passwordHidden: true
      }

      expect(rootReducer(state, togglePassword())).toMatchObject({
        passwordHidden: false
      })
    })

    it('toggles password from visible to hidden', () => {
      const state = {
        passwordHidden: false
      }

      expect(rootReducer(state, togglePassword())).toMatchObject({
        passwordHidden: true
      })
    })

    it('adds a track to the tracksCompleted list', () => {
      const trackId = 'd'
      const tracksCompleted = ['a', 'b', 'c']
      const state = { tracksCompleted }

      expect(rootReducer(state, trackComplete(trackId))).toMatchObject({
        tracksCompleted: new Set([...tracksCompleted, trackId])
      })
    })
  })
})
