exports.fields = `
    id: String!
    name: String!
    type: String!
    layers: [Layer!]
`

exports.schema = `
  interface Layer {
    ${exports.fields}
  }

  type UnknownLayerType {
    ${exports.fields}
  }
`

exports.resolvers = {
  id: l => l.do_objectID,
  type: l => l._class,
}

exports.resolver = {
  __resolveType(obj) {
    switch (obj._class) {
      case 'text':
        return 'Text'
      default:
        return 'UnknownLayerType'
    }
  },
}
