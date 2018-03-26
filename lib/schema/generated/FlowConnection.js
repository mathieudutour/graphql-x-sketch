// ⚠️ DO NOT MODIFY THIS FILE DIRECTLY, IT WAS AUTO-GENERATED. See lib/generate-types.js
exports.name = 'FlowConnection'

exports.schema = `
  
  type FlowConnection {
    id: ID!
    _class: String!
    
    destinationArtboardID: String
    animationType: Float
    
  }
`

exports.resolver = {
  id: l => l.do_objectID,
}
