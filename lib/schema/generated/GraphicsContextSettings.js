// ⚠️ DO NOT MODIFY THIS FILE DIRECTLY, IT WAS AUTO-GENERATED. See lib/generate-types.js
exports.name = 'GraphicsContextSettings'

exports.schema = `
  
  type GraphicsContextSettings {
    id: ID!
    _class: String!
    opacity: Float!
    blendMode: Int!
  }
`

exports.resolver = {
  id: l => l.do_objectID,
}
