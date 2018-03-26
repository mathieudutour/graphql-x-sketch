// ⚠️ DO NOT MODIFY THIS FILE DIRECTLY, IT WAS AUTO-GENERATED. See lib/generate-types.js
exports.name = 'StyleFill'

exports.schema = `
  
  type StyleFill implements StylePartInterface {
    id: ID!
    _class: String!
    isEnabled: Boolean!
    
    fillType: Int!
    color: Color
    contextSettings: GraphicsContextSettings!
    gradient: Gradient!
    noiseIndex: Float!
    patternTileScale: Float!
    patternFillType: Int!
    image: String
    noiseIntensity: Float
    
  }
`

exports.resolver = {
  id: l => l.do_objectID,
}
