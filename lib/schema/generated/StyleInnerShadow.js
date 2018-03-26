// ⚠️ DO NOT MODIFY THIS FILE DIRECTLY, IT WAS AUTO-GENERATED. See lib/generate-types.js
exports.name = 'StyleInnerShadow'

exports.schema = `
  
  type StyleInnerShadow implements StylePartInterface {
    id: ID!
    _class: String!
    isEnabled: Boolean!
    
    offsetY: Float!
    offsetX: Float!
    blurRadius: Float!
    spread: Float!
    color: Color!
    contextSettings: GraphicsContextSettings!
    
    
  }
`

exports.resolver = {
  id: l => l.do_objectID,
}
