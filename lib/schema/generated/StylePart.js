// ⚠️ DO NOT MODIFY THIS FILE DIRECTLY, IT WAS AUTO-GENERATED. See lib/generate-types.js
exports.name = 'StylePart'

exports.schema = `
  
interface StylePartInterface {
    id: ID!
    _class: String!
    isEnabled: Boolean!
  }

  type StylePart {
    id: ID!
    _class: String!
    isEnabled: Boolean!
  }
`

exports.resolver = {
  id: l => l.do_objectID,
}
