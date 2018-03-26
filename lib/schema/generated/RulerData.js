// ⚠️ DO NOT MODIFY THIS FILE DIRECTLY, IT WAS AUTO-GENERATED. See lib/generate-types.js
exports.name = 'RulerData'

exports.schema = `
  
  type RulerData {
    id: ID!
    _class: String!
    
    base: Float
    guides: [JSON]!
    
  }
`

exports.resolver = {
  id: l => l.do_objectID,
}
