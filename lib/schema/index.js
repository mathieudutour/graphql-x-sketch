const { makeExecutableSchema } = require('graphql-tools')

const Document = require('./Document')
const Page = require('./Page')
const Layer = require('./Layer')
const Text = require('./Text')

const typeDefs = `
  ${Document.schema}
  ${Page.schema}
  ${Layer.schema}
  ${Text.schema}

  # the schema allows the following query:
  type Query {
    documentWithId(id: String!): Document
    documents: [Document!]
  }
`

const resolvers = {
  Query: {
    documentWithId: (root, { id }) => root[id],
    documents: root => Object.keys(root).map(k => root[k]),
  },
  Document: Document.resolver,
  Page: Page.resolver,
  Layer: Layer.resolver,
  UnknownLayerType: Layer.resolvers,
  Text: Text.resolver,
}

module.exports = makeExecutableSchema({
  typeDefs,
  resolvers,
})
