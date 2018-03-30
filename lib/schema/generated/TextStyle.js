// ⚠️ DO NOT MODIFY THIS FILE DIRECTLY, IT WAS AUTO-GENERATED. See lib/generate-types.js
exports.name = 'TextStyle'

exports.schema = `
  
  type TextStyle {
    id: ID!
    _class: String!
    verticalAlignment: Int
    encodedAttributes: JSON
  }
`

exports.resolver = {
  id: l => l.do_objectID,
}
