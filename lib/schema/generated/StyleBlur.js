// ⚠️ DO NOT MODIFY THIS FILE DIRECTLY, IT WAS AUTO-GENERATED. See lib/generate-types.js
exports.name = 'StyleBlur'

exports.schema = `
  
  type StyleBlur implements StylePartInterface {
    id: ID!
    _class: String!
    isEnabled: Boolean!
    center: NSPoint!
    motionAngle: Float!
    type: Int
    radius: Float!
  }
`

exports.resolver = {
  id: l => l.do_objectID,
}
