// ⚠️ DO NOT MODIFY THIS FILE DIRECTLY, IT WAS AUTO-GENERATED. See lib/generate-types.js
exports.name = 'SharedStyle'

exports.schema = `
  
  type SharedStyle implements SharedObjectInterface {
    id: ID!
    _class: String!
    name: String
    value: String
  }
`

exports.resolver = {
  id: l => l.do_objectID,
}
