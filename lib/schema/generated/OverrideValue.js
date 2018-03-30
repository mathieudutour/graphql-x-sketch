// ⚠️ DO NOT MODIFY THIS FILE DIRECTLY, IT WAS AUTO-GENERATED. See lib/generate-types.js
exports.name = 'OverrideValue'

exports.schema = `
  
  type OverrideValue {
    id: ID!
    _class: String!
    value: String!
    overrideName: String!
    type: String!
  }
`

exports.resolver = {
  id: l => l.do_objectID,
  value: ({ value }) => {
      if (typeof value === 'string') {
        return value
      }
      if (value._class === 'MSJSONFileReference') {
        return value._ref
      }
      return JSON.stringify(value, null, 2)
    },
  type: ({ overrideName }) => overrideName.split('_')[1],
}
