// ⚠️ DO NOT MODIFY THIS FILE DIRECTLY, IT WAS AUTO-GENERATED. See lib/generate-types.js
exports.name = 'StyleFill'

exports.schema = `
  
  type StyleFill implements StylePartInterface {
    id: ID!
    _class: String!
    isEnabled: Boolean!
    fillType: FillType!
    color: Color
    contextSettings: GraphicsContextSettings!
    gradient: Gradient!
    noiseIndex: Float!
    patternTileScale: Float!
    patternFillType: PatternFillType!
    image: JSON
    noiseIntensity: Float
  }
`

exports.resolver = {
  id: l => l.do_objectID,
}
