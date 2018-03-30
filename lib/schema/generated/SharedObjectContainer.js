// ⚠️ DO NOT MODIFY THIS FILE DIRECTLY, IT WAS AUTO-GENERATED. See lib/generate-types.js
exports.name = 'SharedObjectContainer'

exports.schema = `
  
interface SharedObjectContainerInterface {
    id: ID!
    _class: String!
    objects: [SharedObject!]!
  }

  type SharedObjectContainer {
    id: ID!
    _class: String!
    objects: [SharedObject!]!
  }
`

exports.resolver = {
  id: l => l.do_objectID,
}
