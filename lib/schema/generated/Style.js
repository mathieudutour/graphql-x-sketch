// ⚠️ DO NOT MODIFY THIS FILE DIRECTLY, IT WAS AUTO-GENERATED. See lib/generate-types.js
exports.name = 'Style'

exports.schema = `
  
  type Style {
    id: ID!
    _class: String!
    
    startDecorationType: Int
    sharedObjectID: String
    miterLimit: Float!
    endDecorationType: Int
    borders: [StyleBorder!]!
    shadows: [StyleShadow!]!
    borderOptions: StyleBorderOptions!
    colorControls: StyleColorControls!
    fills: [StyleFill!]!
    innerShadows: [StyleInnerShadow!]!
    blur: StyleBlur!
    contextSettings: GraphicsContextSettings!
    textStyle: TextStyle
  }
`

exports.resolver = {
  id: l => l.do_objectID,
}
