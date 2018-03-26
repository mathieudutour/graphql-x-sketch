const path = require('path')
const fs = require('fs')

// eslint-disable-next-line import/no-dynamic-require
const dataModel = require(path.join(
  __dirname,
  '../../Sketch/Modules/SketchModel/Source/Sketch.xcdatamodeld.json'
))

const SCALAR_MAP = {
  int64_t: 'Int',
  int32_t: 'Int',
  int16_t: 'Int',
  NSUInteger: 'Int',
  NSInteger: 'Int',
  double: 'Float',
  float: 'Float',
  CoreDataScalarInt64: 'Float',
  CoreDataScalarDouble: 'Float',
  CGFloat: 'Float',
  BOOL: 'Boolean',
  CoreDataScalarBoolean: 'Boolean',
  NSString: 'String',
  NSDictionary: 'JSON',
  // TODO: do something about it
  'NSObject<NSCopying>': 'String',
  NSArray: '[JSON]',
  MSImageData: 'String',
  MSModelObjectCommon: 'String',
  MSAttributedString: 'AttributedString',
  // TODO: transform to enum
  BCConstraint: 'Int',
  BCTextBehaviourType: 'Int',
  MSExportLayerOptions: 'Int',
  MSStyleBlurType: 'Int',
  MSBooleanOperation: 'Int',
  MSTextStyleVerticalAlignment: 'Int',
  MSCurveMode: 'Int',
  MSUserVisibleScaleType: 'Int',
  BCTextLineSpacingBehaviourType: 'Int',
  MSBorderPositionType: 'Int',
  MSPatternFillType: 'Int',
  MSPointRadiusBehaviour: 'Int',
  MSBlendMode: 'Int',
  BCFillType: 'Int',
  MSExportFormatNamingScheme: 'Int',
  MSGradientType: 'Int',
  MSDecorationType: 'Int',
  NSWindingRule: 'Int',
  MSLayerResizingType: 'Int',
  // Enums
  MSColorSpace: 'ColorSpace',
  NSLineCapStyle: 'LineCapStyle',
  NSLineJoinStyle: 'LineJoinStyle',
  MSLayerListStatus: 'LayerListStatus',
}

function findSupers(k) {
  const c = dataModel.classes[k]
  if (!c || !c.super) {
    return [k]
  }
  if (c.supers) {
    return c.supers.concat(k)
  }
  return findSupers(c.super.class).concat(k)
}

function printDescription(description) {
  return description ? `"""\n    ${description}\n    """\n    ` : ''
}

function printAttributes(attributes) {
  return Object.keys(attributes)
    .map(
      attr =>
        `${printDescription(attributes[attr].description)}${attr}: ${SCALAR_MAP[
          attributes[attr].type
        ] || attributes[attr].type}${
          attributes[attr].optional || attributes[attr].default === 'nil'
            ? ''
            : '!'
        }`
    )
    .join('\n    ')
}

function printRelationships(relations) {
  return Object.keys(relations)
    .map(
      k =>
        `${printDescription(relations[k].description)}${k}: ${
          relations[k].toMany ? `[${relations[k].type}!]` : relations[k].type
        }${relations[k].optional ? '' : '!'}`
    )
    .join('\n    ')
}

function printSupers(supers) {
  return supers
    .map(k => {
      const superClass = dataModel.classes[k]
      return `${printAttributes(
        superClass.attributes
      )}\n    ${printRelationships(superClass.relationships)}`
    })
    .join('\n    ')
}

Object.keys(dataModel.classes).forEach(k => {
  const c = dataModel.classes[k]
  if (c.super) {
    const supers = findSupers(c.super.class)
    dataModel.classes[supers[0]].dependants = (
      dataModel.classes[supers[0]].dependants || []
    ).concat(k)
    c.supers = supers
  } else {
    c.supers = []
  }
})

Object.keys(dataModel.classes).forEach(k => {
  const c = dataModel.classes[k]
  fs.writeFileSync(
    path.join(__dirname, `./schema/generated/${k}.js`),
    `// ⚠️ DO NOT MODIFY THIS FILE DIRECTLY, IT WAS AUTO-GENERATED. See lib/generate-types.js
exports.name = '${k}'

exports.schema = \`
  ${
    c.dependants
      ? `\ninterface ${k}Interface {
    id: ID!
    _class: String!
    ${printSupers(c.supers)}
    ${printAttributes(c.attributes)}
    ${printRelationships(c.relationships)}
  }\n`
      : ''
  }
  type ${k}${c.supers[0] ? ` implements ${c.supers[0]}Interface` : ''} {
    id: ID!
    _class: String!
    ${printSupers(c.supers)}
    ${printAttributes(c.attributes)}
    ${printRelationships(c.relationships)}
  }
\`

exports.resolver = {
  id: l => l.do_objectID,
}
`
  )
})
