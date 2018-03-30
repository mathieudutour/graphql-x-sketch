// ⚠️ DO NOT MODIFY THIS FILE DIRECTLY, IT WAS AUTO-GENERATED. See lib/generate-types.js
exports.name = 'Gradient'

exports.schema = `
  
  type Gradient {
    id: ID!
    _class: String!
    gradientType: Int
    to: NSPoint!
    elipseLength: Float
    from: NSPoint!
    stops: [GradientStop!]!
  }
`

exports.resolver = {
  id: l => l.do_objectID,
}
