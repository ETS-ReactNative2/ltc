export const contentTypes = {
  BADGES: 'BADGES',
  CARDS: 'CARDS',
  CARD_SAMPLE: 'CARD_SAMPLE',
  DRAWER_FOR_CHILDREN: 'DRAWER_FOR_CHILDREN',
  DRAWER_FOR_SIBLINGS: 'DRAWER_FOR_SIBLINGS',
  FAQ: 'FAQ',
  GOALS: 'GOALS',
  HOME_PAGE: 'HOME_PAGE',
  NONE: 'NONE',
  SITE_MAP: 'SITE_MAP',
  STEPS: 'STEPS',
  TABLE_OF_CONTENTS: 'TABLE_OF_CONTENTS',
  TRACKS: 'TRACKS',
  ZONES: 'ZONES'
}

export const captionPositions = {
  ABOVE: 'ABOVE',
  BELOW: 'BELOW'
}

export const drawerTypes = {
  CHILDREN: 'CHILDREN',
  SIBLINGS: 'SIBLINGS'
}

export const imageTypes = {
  IMAGE_GIF: 'IMAGE_GIF',
  IMAGE_PNG: 'IMAGE_PNG',
  IMAGE_JPEG: 'IMAGE_JPEG',
  IMAGE_BMP: 'IMAGE_BMP',
  IMAGE_WEBP: 'IMAGE_WEBP',
  IMAGE_X_ICON: 'IMAGE_X_ICON',
  IMAGE_VND_MICROSOFT_ICON: 'IMAGE_VND_MICROSOFT_ICON',
  IMAGE_SVG_XML: 'IMAGE_SVG_XML'
}

export const figureTypes = {
  CODE: 'CODE',
  IMAGE: 'IMAGE',
  RUNKIT: 'RUNKIT',
  SANDBOX: 'SANDBOX',
  VIDEO: 'VIDEO'
}

export const languages = {
  CSS: 'CSS',
  Docker: 'Docker',
  HTML: 'HTML',
  HTTP: 'HTTP',
  Java: 'Java',
  JavaScript: 'JavaScript',
  JSON: 'JSON',
  Markdown: 'Markdown',
  None: 'None',
  PHP: 'PHP',
  Sass: 'Sass',
  Shell: 'Shell',
  SQL: 'SQL',
  TypeScript: 'TypeScript',
  XHTML: 'XHTML',
  XML: 'XML',
  YAML: 'YAML'
}

// Paths
export const BADGE_PATH = '/zones/:zone/:track/:badge'
export const GOAL_PATH = '/zones/:zone/:track/:badge/:goal'
export const HOME_PATH = '/'
export const HOW_TO_PATH = '/how_to'
export const NOT_FOUND_PATH = '/not_found'
export const RABBIT_HOLE_PATH = '/deep_dive/:note'
export const PAGE_PATH = '/:page'
export const STEP_PATH = '/zones/:zone/:track/:badge/:goal/:step'
export const TRACK_PATH = '/zones/:zone/:track'
export const ZONES_PATH = '/zones'
export const ZONE_PATH = '/zones/:zone'
