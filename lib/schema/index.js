const { makeExecutableSchema } = require('graphql-tools')
const fs = require('fs')
const path = require('path')
const typeMap = require('./type-map')

const Document = require('./Document')
const Scalars = require('./Scalars')

const generated = fs
  .readdirSync(path.join(__dirname, './generated'))
  .map(f => require(path.join(__dirname, './generated', f))) // eslint-disable-line

const typeDefs = `
  ${Scalars.schema}
  ${Document.schema}
  ${generated.map(f => f.schema).join('\n  ')}

  # the schema allows the following query:
  type Query {
    documentWithId(id: String!): Document
    documents: [Document!]
  }
`

const resolvers = {
  ...Scalars.resolver,
  LayerInterface: {
    __resolveType(obj) {
      return typeMap[obj._class] || obj._class
    },
  },
  Query: {
    documentWithId: (root, { id }) => root[id],
    documents: root => Object.keys(root).map(k => root[k]),
  },
  Document: Document.resolver,
  ...generated.reduce((prev, f) => {
    prev[f.name] = f.resolver // eslint-disable-line
    return prev
  }, {}),
}

module.exports = makeExecutableSchema({
  typeDefs,
  resolvers,
})
