// ⚠️ DO NOT MODIFY THIS FILE DIRECTLY, IT WAS AUTO-GENERATED. See lib/generate-types.js
exports.name = 'BaseGrid'

exports.schema = `
  
interface BaseGridInterface {
    id: ID!
    _class: String!
    isEnabled: Boolean
  }

  type BaseGrid {
    id: ID!
    _class: String!
    isEnabled: Boolean
  }
`

exports.resolver = {
  id: l => l.do_objectID,
}
