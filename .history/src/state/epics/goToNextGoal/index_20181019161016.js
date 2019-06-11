import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/of'
import 'rxjs/add/operator/delay'
import 'rxjs/add/operator/filter'
import 'rxjs/add/operator/mergeMap'
import { push } from 'react-router-redux'
import { isNotUndefined } from 'ramda-adjunct'

import { GOAL_COMPLETE } from '../../constants'

const goToNextGoal = action$ =>
  action$
    .ofType(GOAL_COMPLETE)
    .filter(({ payload: { nextGoal } }) => isNotUndefined(nextGoal))
    .delay(1500)
    .mergeMap(({ payload: { nextGoal } }) => Observable.of(push(nextGoal)))

export default goToNextGoal
