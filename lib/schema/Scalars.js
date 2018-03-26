const { GraphQLScalarType } = require('graphql')
const JSON = require('graphql-type-json')

const ColorSpaceEnum = {
  Unmanaged: 0,
  SRGB: 1,
  DisplayP3: 2,
}

const ColorSpace = new GraphQLScalarType({
  name: 'ColorSpace',
  description:
    'Enumeration of supported color spaces.\nUnmanaged | SRGB | DisplayP3',
  serialize(value) {
    return (
      Object.keys(ColorSpaceEnum).find(k => ColorSpaceEnum[k] === value) ||
      value
    )
  },
  parseValue(value) {
    return (
      Object.keys(ColorSpaceEnum).find(k => ColorSpaceEnum[k] === value) ||
      value
    )
  },
  parseLiteral(ast) {
    return ColorSpaceEnum[ast.value] || ast.value
  },
})

const LineCapStyleEnum = {
  Butt: 0,
  Round: 1,
  Square: 2,
}

const LineCapStyle = new GraphQLScalarType({
  name: 'LineCapStyle',
  description: '',
  serialize(value) {
    return (
      Object.keys(LineCapStyleEnum).find(k => LineCapStyleEnum[k] === value) ||
      value
    )
  },
  parseValue(value) {
    return (
      Object.keys(LineCapStyleEnum).find(k => LineCapStyleEnum[k] === value) ||
      value
    )
  },
  parseLiteral(ast) {
    return LineCapStyleEnum[ast.value] || ast.value
  },
})

const LineJoinStyleEnum = {
  Miter: 0,
  Round: 1,
  Bevel: 2,
}

const LineJoinStyle = new GraphQLScalarType({
  name: 'LineJoinStyle',
  description: '',
  serialize(value) {
    return (
      Object.keys(LineJoinStyleEnum).find(
        k => LineJoinStyleEnum[k] === value
      ) || value
    )
  },
  parseValue(value) {
    return (
      Object.keys(LineJoinStyleEnum).find(
        k => LineJoinStyleEnum[k] === value
      ) || value
    )
  },
  parseLiteral(ast) {
    return LineJoinStyleEnum[ast.value] || ast.value
  },
})

const LayerListStatusEnum = {
  Undecided: 0,
  Collapsed: 1,
  Expanded: 2,
}

const LayerListStatus = new GraphQLScalarType({
  name: 'LayerListStatus',
  description: 'Undecided | Collapsed | Expanded',
  serialize(value) {
    return (
      Object.keys(LayerListStatusEnum).find(
        k => LayerListStatusEnum[k] === value
      ) || value
    )
  },
  parseValue(value) {
    return (
      Object.keys(LayerListStatusEnum).find(
        k => LayerListStatusEnum[k] === value
      ) || value
    )
  },
  parseLiteral(ast) {
    return LayerListStatusEnum[ast.value] || ast.value
  },
})

module.exports.schema = `
  scalar ColorSpace
  scalar LineCapStyle
  scalar LineJoinStyle
  scalar LayerListStatus

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
  ColorSpace,
  LineCapStyle,
  LineJoinStyle,
  LayerListStatus,
  JSON,
}
