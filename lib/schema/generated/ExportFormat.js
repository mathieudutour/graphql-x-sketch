// ⚠️ DO NOT MODIFY THIS FILE DIRECTLY, IT WAS AUTO-GENERATED. See lib/generate-types.js
exports.name = 'ExportFormat'

exports.schema = `
  
  type ExportFormat {
    id: ID!
    _class: String!
    absoluteSize: Float
    fileFormat: String
    namingScheme: ExportFormatNamingScheme!
    name: String
    visibleScaleType: UserVisibleScaleType!
    scale: Float!
  }
`

exports.resolver = {
  id: l => l.do_objectID,
}
