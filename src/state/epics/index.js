import { combineEpics } from 'redux-observable'

import goToNextBadge from './goToNextBadge'
import goToNextGoal from './goToNextGoal'
import goToNextStep from './goToNextStep'

export default combineEpics(goToNextBadge, goToNextGoal, goToNextStep)
