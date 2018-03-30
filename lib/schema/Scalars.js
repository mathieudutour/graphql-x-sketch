const { GraphQLScalarType } = require('graphql')
const JSON = require('graphql-type-json')

function Enum(name, enumeration, description) {
  return new GraphQLScalarType({
    name,
    description: `${description ? `${description}\n` : ''}${Object.keys(
      enumeration
    ).join(' | ')}`,
    serialize(value) {
      return (
        Object.keys(enumeration).find(k => enumeration[k] === value) || value
      )
    },
    parseValue(value) {
      return (
        Object.keys(enumeration).find(k => enumeration[k] === value) || value
      )
    },
    parseLiteral(ast) {
      return enumeration[ast.value] || ast.value
    },
  })
}

const enums = [
  Enum(
    'ColorSpace',
    {
      Unmanaged: 0,
      SRGB: 1,
      DisplayP3: 2,
    },
    'Enumeration of supported color spaces.'
  ),
  Enum('LineCapStyle', {
    Butt: 0,
    Round: 1,
    Square: 2,
  }),
  Enum('LineJoinStyle', {
    Miter: 0,
    Round: 1,
    Bevel: 2,
  }),
  Enum('LayerListStatus', {
    Undecided: 0,
    Collapsed: 1,
    Expanded: 2,
  }),
  Enum('TextBehaviourType', {
    FlexibleWidth: 0,
    FixedWidth: 1,
    FixedWidthAndHeight: 2,
  }),
  Enum('ExportLayerOptions', {
    All: 0,
    Selected: 1,
    InGroup: 2,
  }),
  Enum('StyleBlurType', {
    Gaussian: 0,
    Motion: 1,
    Zoom: 2,
    Backgrounn: 3,
  }),
  Enum('BooleanOperation', {
    None: -1,
    Union: 0,
    Substract: 1,
    Intersect: 2,
    Difference: 3,
  }),
  Enum('TextStyleVerticalAlignment', {
    Top: 0,
    Middle: 1,
    Bottom: 2,
  }),
  Enum('CurveMode', {
    Undefined: 0,
    Straight: 1,
    Mirrored: 2,
    Asymmetric: 3,
    Disconnected: 4,
  }),
  Enum('UserVisibleScaleType', {
    Scale: 0,
    Width: 1,
    Height: 2,
  }),
  Enum(
    'TextLineSpacingBehaviourType',
    {
      Unknown: -1,
      V1: 0,
      V2: 1,
      V3: 2,
    },
    'Defines how we type-set paragraphs with fixed line spacing.'
  ),
  Enum('BorderPositionType', {
    Center: 0,
    Inside: 1,
    Outside: 2,
  }),
  Enum('PatternFillType', {
    Tile: 0,
    Fill: 1,
    Stretch: 2,
    Fit: 3,
  }),
  Enum(
    'PointRadiusBehaviour',
    {
      V0: 0,
      V1: 1,
      V1Smooth: 2,
      Disabled: -1,
    },
    'Defines how we join edges with an arc segment'
  ),
  Enum('BlendMode', {
    Normal: 0,
    Darken: 1,
    Multiply: 2,
    ColorBurn: 3,
    Lighten: 4,
    Screen: 5,
    ColorDodge: 6,
    Overlay: 7,
    SoftLight: 8,
    HardLight: 9,
    Difference: 10,
    Exclusion: 11,
    Hue: 12,
    Saturation: 13,
    Color: 14,
    Luminosity: 15,
  }),
  Enum('FillType', {
    Color: 0,
    Gradient: 1,
    Pattern: 4,
    Noise: 5,
  }),
  Enum('ExportFormatNamingScheme', {
    Suffix: 0,
    Prefix: 1,
  }),
  Enum('GradientType', {
    Linear: 0,
    Radial: 1,
    Angular: 2,
  }),
  Enum('DecorationType', {
    None: 0,
    OpenArrow: 1,
    ClosedArrow: 2,
    Line: 3,
  }),
  Enum('WindingRule', {
    NonZero: 0,
    EvenOdd: 1,
  }),
  Enum('LayerResizingType', {
    Stretch: 0,
    PinToEdge: 1,
    Resize: 2,
    Float: 3,
  }),
  Enum('Constraint', {
    None: 0,
    MaxXSizeable: 1,
    WidthSizeable: 2,
    MinXSizeable: 4,
    MaxYSizeable: 8,
    HeightSizeable: 16,
    MinYSizeable: 32,
    AllSizeable: 63,
    AllFixed: 64,
  }),
]

// TODO: do something about AttributedString

module.exports.schema = `
  ${enums.map(e => `scalar ${e.name}`).join('\n  ')}

  scalar JSON

  type NSRect {
    x: Float!
    y: Float!
    width: Float!
    height: Float!
  }

  type NSPoint {
    x: Float!
    y: Float!
  }

  type AttributedString {
    string: String!
  }
`

module.exports.resolver = {
  ...enums.reduce((prev, e) => {
    prev[e.name] = e // eslint-disable-line
    return prev
  }, {}),
  JSON,
}
