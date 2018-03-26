const express = require('express')
const graphqlHTTP = require('express-graphql')
const cors = require('cors')

const PORT = process.env.NODE_PORT || 3000

const schema = require('./schema')

module.exports = getDocuments => {
  const app = express()

  app.use(cors())

  app.use(
    '/',
    graphqlHTTP(async (/* request, response, graphQLParams */) => {
      const docs = getDocuments()
      return {
        schema,
        rootValue: docs.reduce((prev, d) => {
          prev[d.document.do_objectID] = d // eslint-disable-line
          return prev
        }, {}),
        graphiql: true,
      }
    })
  )

  app.listen(PORT)

  console.log(
    `GraphQL server running with your data at http://localhost:${PORT}/`
  )

  process.on('unhandledRejection', (reason, p) => {
    console.error('Unhandled Rejection at: Promise', p, 'reason:', reason)
  })
}
