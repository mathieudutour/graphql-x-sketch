// ⚠️ DO NOT MODIFY THIS FILE DIRECTLY, IT WAS AUTO-GENERATED. See lib/generate-types.js
exports.name = 'StyleColorControls'

exports.schema = `
  
  type StyleColorControls implements StylePartInterface {
    id: ID!
    _class: String!
    isEnabled: Boolean!
    
    hue: Float!
    saturation: Float!
    brightness: Float!
    contrast: Float!
    
  }
`

exports.resolver = {
  id: l => l.do_objectID,
}
