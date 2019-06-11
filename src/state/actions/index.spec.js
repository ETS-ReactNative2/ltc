import {
  badgeComplete,
  badGuess,
  goalComplete,
  stepComplete,
  toggleDrawer,
  togglePassword,
  trackComplete
} from '.'
import {
  BAD_GUESS,
  BADGE_COMPLETE,
  GOAL_COMPLETE,
  STEP_COMPLETE,
  TOGGLE_DRAWER,
  TOGGLE_PASSWORD,
  TRACK_COMPLETE
} from '../constants'

describe('state:actions', () => {
  describe('badgeComplete', () => {
    it(`creates a ${BADGE_COMPLETE} action`, () => {
      const badgeId = 'badgeId'
      const nextBadge = 'nextBadge'

      expect(badgeComplete(badgeId, nextBadge)).toMatchObject({
        type: BADGE_COMPLETE,
        payload: { badgeId, nextBadge }
      })
    })
  })

  describe('badGuess', () => {
    it(`creates a ${BAD_GUESS} action`, () => {
      const answerId = '1234567890'

      expect(badGuess(answerId)).toMatchObject({
        type: BAD_GUESS,
        payload: { answerId }
      })
    })
  })

  describe('goalComplete', () => {
    it(`creates a ${GOAL_COMPLETE} action`, () => {
      const goalId = 'goalId'
      const nextGoal = 'nextGoal'

      expect(goalComplete(goalId, nextGoal)).toMatchObject({
        type: GOAL_COMPLETE,
        payload: { goalId, nextGoal }
      })
    })
  })

  describe('stepComplete', () => {
    it(`creates a ${STEP_COMPLETE} action`, () => {
      const stepId = 'stepId'
      const nextStep = 'nextStep'

      expect(stepComplete(stepId, nextStep)).toMatchObject({
        type: STEP_COMPLETE,
        payload: { stepId, nextStep }
      })
    })
  })

  describe('toggleDrawer', () => {
    it(`creates a ${TOGGLE_DRAWER} action`, () => {
      expect(toggleDrawer()).toMatchObject({
        type: TOGGLE_DRAWER
      })
    })
  })

  describe('togglePassword', () => {
    it(`creates a ${TOGGLE_PASSWORD} action`, () => {
      expect(togglePassword()).toMatchObject({
        type: TOGGLE_PASSWORD
      })
    })
  })

  describe('trackComplete', () => {
    it(`creates a ${TRACK_COMPLETE} action`, () => {
      const trackId = 'trackId'

      expect(trackComplete(trackId)).toMatchObject({
        type: TRACK_COMPLETE,
        payload: { trackId }
      })
    })
  })
})
