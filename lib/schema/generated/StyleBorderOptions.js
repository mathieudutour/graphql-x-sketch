// ⚠️ DO NOT MODIFY THIS FILE DIRECTLY, IT WAS AUTO-GENERATED. See lib/generate-types.js
exports.name = 'StyleBorderOptions'

exports.schema = `
  
  type StyleBorderOptions implements StylePartInterface {
    id: ID!
    _class: String!
    isEnabled: Boolean!
    dashPattern: [JSON]!
    lineCapStyle: LineCapStyle!
    lineJoinStyle: LineJoinStyle!
  }
`

exports.resolver = {
  id: l => l.do_objectID,
}
