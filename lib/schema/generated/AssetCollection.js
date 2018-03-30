// ⚠️ DO NOT MODIFY THIS FILE DIRECTLY, IT WAS AUTO-GENERATED. See lib/generate-types.js
exports.name = 'AssetCollection'

exports.schema = `
  
  type AssetCollection {
    id: ID!
    _class: String!
    images: [JSON]!
    gradients: [Gradient!]!
    colors: [Color!]!
    imageCollection: ImageCollection!
    exportPresets: [ExportPreset!]
  }
`

exports.resolver = {
  id: l => l.do_objectID,
}
