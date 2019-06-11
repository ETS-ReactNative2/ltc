import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/of'
import 'rxjs/add/operator/delay'
import 'rxjs/add/operator/filter'
import 'rxjs/add/operator/mergeMap'
import { push } from 'connected-react-router'
import { isNotUndefined } from 'ramda-adjunct'

import { STEP_COMPLETE } from '../../constants'

const goToNextStep = action$ =>
  action$
    .ofType(STEP_COMPLETE)
    .filter(({ payload: { nextStep } }) => isNotUndefined(nextStep))
    .delay(1500)
    .mergeMap(({ payload: { nextStep } }) => Observable.of(push(nextStep)))

export default goToNextStep
