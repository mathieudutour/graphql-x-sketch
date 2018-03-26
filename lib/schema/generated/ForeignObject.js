// ⚠️ DO NOT MODIFY THIS FILE DIRECTLY, IT WAS AUTO-GENERATED. See lib/generate-types.js
exports.name = 'ForeignObject'

exports.schema = `
  
interface ForeignObjectInterface {
    id: ID!
    _class: String!
    
    libraryID: String
    sourceLibraryName: String!
    
  }

  type ForeignObject {
    id: ID!
    _class: String!
    
    libraryID: String
    sourceLibraryName: String!
    
  }
`

exports.resolver = {
  id: l => l.do_objectID,
}
