// Actions: client
export const BADGE_COMPLETE = '@client/BADGE_COMPLETE'
export const BAD_GUESS = '@client/BAD_GUESS'
export const GOAL_COMPLETE = '@client/GOAL_COMPLETE'
export const STEP_COMPLETE = '@client/STEP_COMPLETE'
export const TOGGLE_DRAWER = '@client/TOGGLE_DRAWER'
export const TOGGLE_PASSWORD = '@client/BAD_GUESS'
export const TRACK_COMPLETE = '@client/TRACK_COMPLETE'
export const UPDATE_DRAFT = '@client/UPDATE_DRAFT'

// Actions: admin
export const CHANGE_REDONE = '@admin/CHANGE_REDONE'
export const CHANGE_UNDONE = '@admin/CHANGE_UNDONE'
export const VALUE_CHANGED = '@admin/VALUE_CHANGED'
export const VALUE_CLEARED = '@admin/VALUE_CLEARED'
export const VALUE_RESET = '@admin/VALUE_RESET'

// Paths
export const BADGE_PATH = '/zones/:zone/:track/:badge'
export const DASHBOARD_PATH = '/site_dashboard'
export const GOAL_PATH = '/zones/:zone/:track/:badge/:goal'
export const HOME_PATH = '/'
export const HOW_TO_PATH = '/how_to'
export const NOT_FOUND_PATH = '/not_found'
export const RABBIT_HOLE_PATH = '/deep_dive/:note'
export const PAGE_PATH = '/:page'
export const SIGN_IN_PATH = '/sign_in'
export const STEP_PATH = '/zones/:zone/:track/:badge/:goal/:step'
export const TRACK_PATH = '/zones/:zone/:track'
export const ZONES_PATH = '/zones'
export const ZONE_PATH = '/zones/:zone'

// State
export const initialState = {
  admin: {
    editors: {}
  },
  client: {
    badgesCompleted: new Set(),
    badGuesses: new Set(),
    drawerOpen: false,
    goalsCompleted: new Set(),
    passwordHidden: false,
    stepsCompleted: new Set(),
    tracksCompleted: new Set()
  }
}
