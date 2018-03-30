// ⚠️ DO NOT MODIFY THIS FILE DIRECTLY, IT WAS AUTO-GENERATED. See lib/generate-types.js
exports.name = 'ForeignSymbol'

exports.schema = `
  
  type ForeignSymbol implements ForeignObjectInterface {
    id: ID!
    _class: String!
    libraryID: String
    sourceLibraryName: String!
    originalMaster: SymbolMaster!
    symbolMaster: SymbolMaster!
  }
`

exports.resolver = {
  id: l => l.do_objectID,
}
