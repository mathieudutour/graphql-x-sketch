// ⚠️ DO NOT MODIFY THIS FILE DIRECTLY, IT WAS AUTO-GENERATED. See lib/generate-types.js
exports.name = 'ShapePath'

exports.schema = `
  
  type ShapePath {
    id: ID!
    _class: String!
    
    isClosed: Boolean
    pointRadiusBehaviour: Int!
    points: [CurvePoint!]!
  }
`

exports.resolver = {
  id: l => l.do_objectID,
}
