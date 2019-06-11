const rewireInlineImportGraphqlAst = require('react-app-rewire-inline-import-graphql-ast')
const rewireStyledComponents = require('react-app-rewire-styled-components')

module.exports = function override (config, env) {
  config = rewireStyledComponents(config, env, {
    fieldName: false
  })
  config = rewireInlineImportGraphqlAst(config, env)

  return config
}
