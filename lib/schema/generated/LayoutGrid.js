// ⚠️ DO NOT MODIFY THIS FILE DIRECTLY, IT WAS AUTO-GENERATED. See lib/generate-types.js
exports.name = 'LayoutGrid'

exports.schema = `
  
  type LayoutGrid implements BaseGridInterface {
    id: ID!
    _class: String!
    isEnabled: Boolean
    gutterWidth: Float!
    horizontalOffset: Float
    numberOfColumns: Float!
    gutterHeight: Float!
    totalWidth: Float!
    drawHorizontalLines: Boolean
    drawHorizontal: Boolean
    guttersOutside: Boolean!
    columnWidth: Float!
    rowHeightMultiplication: Float!
    drawVertical: Boolean!
  }
`

exports.resolver = {
  id: l => l.do_objectID,
}
