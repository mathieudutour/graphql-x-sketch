// ⚠️ DO NOT MODIFY THIS FILE DIRECTLY, IT WAS AUTO-GENERATED. See lib/generate-types.js
exports.name = 'ImageCollection'

exports.schema = `
  
  type ImageCollection {
    id: ID!
    _class: String!
    
    images: JSON!
    
  }
`

exports.resolver = {
  id: l => l.do_objectID,
}
