exports.schema = `
  type Page {
    id: String!
    name: String!
    layers: [Layer!]
  }
`

exports.resolver = {
  id: p => p.do_objectID,
}
