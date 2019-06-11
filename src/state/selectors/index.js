// Client selectors
export function completedBadges ({ client: { badgesCompleted = [] } = {} }) {
  return [...badgesCompleted]
}

export function completedGoals ({ client: { goalsCompleted = [] } = {} }) {
  return [...goalsCompleted]
}

export function completedSteps ({ client: { stepsCompleted = [] } = {} }) {
  return [...stepsCompleted]
}

export function completedTracks ({ client: { tracksCompleted = [] } = {} }) {
  return [...tracksCompleted]
}

export function drawerIsOpen ({ client: { drawerOpen } = {} }) {
  return drawerOpen
}

export function passwordIsHidden ({ client: { passwordHidden } = {} }) {
  return passwordHidden
}

export function guessedWrong ({ client: { badGuesses = [] } = {} }) {
  return [...badGuesses]
}

// Admin selectors
export function getEditorState ({ admin: { editorState } = {} }) {
  return editorState
}

// Route selectors
export function getPathname ({ router: { location: { pathname: fullPath } } }) {
  return fullPath
}

export function getSearch ({ router: { location: { search } } }) {
  return search
}
