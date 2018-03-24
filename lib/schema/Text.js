const Layer = require('./Layer')

exports.schema = `
  type Text implements Layer {
    ${Layer.fields}
    text: String!
  }
`

exports.resolver = {
  ...Layer.resolvers,
  text: l => l.attributedString.string,
}
