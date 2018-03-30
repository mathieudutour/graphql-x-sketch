// ⚠️ DO NOT MODIFY THIS FILE DIRECTLY, IT WAS AUTO-GENERATED. See lib/generate-types.js
exports.name = 'StyleBasicFill'

exports.schema = `
  
  type StyleBasicFill implements StylePartInterface {
    id: ID!
    _class: String!
    isEnabled: Boolean!
    fillType: Int!
    color: Color
    contextSettings: GraphicsContextSettings!
    gradient: Gradient!
  }
`

exports.resolver = {
  id: l => l.do_objectID,
}
