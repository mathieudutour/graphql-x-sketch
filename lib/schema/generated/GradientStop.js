// ⚠️ DO NOT MODIFY THIS FILE DIRECTLY, IT WAS AUTO-GENERATED. See lib/generate-types.js
exports.name = 'GradientStop'

exports.schema = `
  
  type GradientStop {
    id: ID!
    _class: String!
    
    position: Float
    color: Color
  }
`

exports.resolver = {
  id: l => l.do_objectID,
}
