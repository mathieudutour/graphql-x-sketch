// ⚠️ DO NOT MODIFY THIS FILE DIRECTLY, IT WAS AUTO-GENERATED. See lib/generate-types.js
exports.name = 'ForeignStyle'

exports.schema = `
  
  type ForeignStyle implements ForeignObjectInterface {
    id: ID!
    _class: String!
    libraryID: String
    sourceLibraryName: String!
    remoteStyleID: String!
    localSharedStyle: SharedStyle!
  }
`

exports.resolver = {
  id: l => l.do_objectID,
}
