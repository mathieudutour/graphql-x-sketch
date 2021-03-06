// ⚠️ DO NOT MODIFY THIS FILE DIRECTLY, IT WAS AUTO-GENERATED. See lib/generate-types.js
exports.name = 'StyleBorder'

exports.schema = `
  
  type StyleBorder implements StylePartInterface {
    id: ID!
    _class: String!
    isEnabled: Boolean!
    fillType: FillType!
    color: Color
    contextSettings: GraphicsContextSettings!
    gradient: Gradient!
    position: BorderPositionType!
    thickness: Float!
  }
`

exports.resolver = {
  id: l => l.do_objectID,
}
