import { connectRouter } from 'connected-react-router'
import { combineReducers } from 'redux'

import admin from './admin'
import client from './client'

export default (history) => combineReducers({
  admin,
  client,
  router: connectRouter(history)
})
