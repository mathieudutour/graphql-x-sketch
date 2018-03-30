// ⚠️ DO NOT MODIFY THIS FILE DIRECTLY, IT WAS AUTO-GENERATED. See lib/generate-types.js
exports.name = 'SharedStyleContainer'

exports.schema = `
  
  type SharedStyleContainer implements SharedObjectContainerInterface {
    id: ID!
    _class: String!
    objects: [SharedObject!]!
  }
`

exports.resolver = {
  id: l => l.do_objectID,
}
