// ⚠️ DO NOT MODIFY THIS FILE DIRECTLY, IT WAS AUTO-GENERATED. See lib/generate-types.js
exports.name = 'SimpleGrid'

exports.schema = `
  
  type SimpleGrid implements BaseGridInterface {
    id: ID!
    _class: String!
    isEnabled: Boolean
    gridSize: Float!
    thickGridTimes: Float!
  }
`

exports.resolver = {
  id: l => l.do_objectID,
}
