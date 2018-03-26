// ⚠️ DO NOT MODIFY THIS FILE DIRECTLY, IT WAS AUTO-GENERATED. See lib/generate-types.js
exports.name = 'OverrideValue'

exports.schema = `
  
  type OverrideValue {
    id: ID!
    _class: String!
    
    value: String!
    overrideName: String!
    
  }
`

exports.resolver = {
  id: l => l.do_objectID,
}
