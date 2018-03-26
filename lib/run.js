/* eslint-disable no-param-reassign */

const {
  Source,
  parse,
  validate,
  execute,
  formatError,
  specifiedRules,
} = require('graphql')

const schema = require('./schema')

function parseGraphQLQuery(query, variables) {
  // GraphQL Query string.
  if (typeof query !== 'string') {
    query = null
  }

  // Parse the variables if needed.
  if (variables && typeof variables === 'string') {
    variables = JSON.parse(variables)
  } else if (typeof variables !== 'object') {
    variables = null
  }

  return { query, variables, operationName: 'query', raw: false }
}

module.exports = (getDocuments, _query, _variables, pretty) => {
  const docs = getDocuments()
  const rootValue = docs.reduce((prev, d) => {
    prev[d.document.do_objectID] = d // eslint-disable-line
    return prev
  }, {})

  const params = parseGraphQLQuery(_query, _variables)

  // GraphQL source.
  const source = new Source(params.query, 'GraphQL request')

  // Parse source to AST, reporting any syntax error.
  const documentAST = parse(source)

  // Validate AST, reporting any errors.
  const validationErrors = validate(schema, documentAST, specifiedRules)
  if (validationErrors.length > 0) {
    throw new Error(validationErrors)
  }

  execute(
    schema,
    documentAST,
    rootValue,
    {},
    params.variables,
    params.operationName
  ).then(result => {
    // Format any encountered errors.
    if (result && result.errors) {
      result.errors = result.errors.map(formatError)
    }

    if (pretty === false) {
      console.log(result)
    } else {
      console.log(JSON.stringify(result, null, 2))
    }
  })
}
