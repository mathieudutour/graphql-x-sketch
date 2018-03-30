// ⚠️ DO NOT MODIFY THIS FILE DIRECTLY, IT WAS AUTO-GENERATED. See lib/generate-types.js
exports.name = 'Rect'

exports.schema = `
  
  type Rect {
    id: ID!
    _class: String!
    y: Float
    constrainProportions: Boolean
    width: Float
    height: Float
    x: Float
  }
`

exports.resolver = {
  id: l => l.do_objectID,
}
