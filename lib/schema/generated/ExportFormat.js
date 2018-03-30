// ⚠️ DO NOT MODIFY THIS FILE DIRECTLY, IT WAS AUTO-GENERATED. See lib/generate-types.js
exports.name = 'ExportFormat'

exports.schema = `
  
  type ExportFormat {
    id: ID!
    _class: String!
    absoluteSize: Float
    fileFormat: String
    namingScheme: Int!
    name: String
    visibleScaleType: Int!
    scale: Float!
  }
`

exports.resolver = {
  id: l => l.do_objectID,
}
