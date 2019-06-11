import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/of'
import 'rxjs/add/operator/delay'
import 'rxjs/add/operator/filter'
import 'rxjs/add/operator/mergeMap'
import { push } from 'connected-react-router'
import { isNotUndefined } from 'ramda-adjunct'

import { BADGE_COMPLETE } from '../../constants'

const goToNextBadge = action$ =>
  action$
    .ofType(BADGE_COMPLETE)
    .filter(({ payload: { nextBadge } }) => isNotUndefined(nextBadge))
    .delay(1500)
    .mergeMap(({ payload: { nextBadge } }) => Observable.of(push(nextBadge)))

export default goToNextBadge
