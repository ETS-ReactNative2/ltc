import { combineReducers } from 'redux'

import admin from './admin'
import client from './client'

export default combineReducers({
  admin,
  client
})
