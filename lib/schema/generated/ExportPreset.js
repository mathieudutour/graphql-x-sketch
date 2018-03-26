// ⚠️ DO NOT MODIFY THIS FILE DIRECTLY, IT WAS AUTO-GENERATED. See lib/generate-types.js
exports.name = 'ExportPreset'

exports.schema = `
  
  type ExportPreset {
    id: ID!
    _class: String!
    
    name: String
    shouldApplyAutomatically: Boolean!
    exportFormats: [ExportFormat!]
  }
`

exports.resolver = {
  id: l => l.do_objectID,
}
