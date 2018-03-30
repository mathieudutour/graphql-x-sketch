// ⚠️ DO NOT MODIFY THIS FILE DIRECTLY, IT WAS AUTO-GENERATED. See lib/generate-types.js
exports.name = 'ExportOptions'

exports.schema = `
  
  type ExportOptions {
    id: ID!
    _class: String!
    includedLayerIds: [JSON]!
    shouldTrim: Boolean
    layerOptions: ExportLayerOptions
    exportFormats: [ExportFormat!]!
  }
`

exports.resolver = {
  id: l => l.do_objectID,
}
