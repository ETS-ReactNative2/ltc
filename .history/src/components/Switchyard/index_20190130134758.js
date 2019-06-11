import * as React from 'react'
import { Route, Switch } from 'react-router'
import { BrowserRouter as Router } from 'react-router-dom'

import {
  BADGE_PATH,
  GOAL_PATH,
  HOME_PATH,
  NOT_FOUND_PATH,
  PAGE_PATH,
  STEP_PATH,
  TRACK_PATH,
  ZONES_PATH,
  ZONE_PATH
} from '../../constants'
import pageQuery from '../../gql/queries/page.graphql'
import NotFound from '../../pages/NotFound'
import withPageContext from '../../wrappers/withPageContext'
import Layout from '../Layout'

const Page = withPageContext(pageQuery)(Layout)

export default function Switchyard () {
  return (
    <Router>
      <Route exact path={HOME_PATH} component={Page} />
      <Route exact path={NOT_FOUND_PATH} component={NotFound} />
      <Route exact path={STEP_PATH} component={Page} />
      <Route exact path={GOAL_PATH} component={Page} />
      <Route exact path={BADGE_PATH} component={Page} />
      <Route exact path={TRACK_PATH} component={Page} />
      <Route exact path={ZONE_PATH} component={Page} />
      <Route exact path={ZONES_PATH} component={Page} />
      <Route path={PAGE_PATH} component={Page} />
    </Router>
  )
}
