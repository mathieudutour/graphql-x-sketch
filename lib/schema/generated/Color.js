// ⚠️ DO NOT MODIFY THIS FILE DIRECTLY, IT WAS AUTO-GENERATED. See lib/generate-types.js
exports.name = 'Color'

exports.schema = `
  
  type Color {
    id: ID!
    _class: String!
    red: Float
    alpha: Float
    blue: Float
    green: Float
  }
`

exports.resolver = {
  id: l => l.do_objectID,
}
