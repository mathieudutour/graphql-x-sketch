/* eslint-disable import/no-dynamic-require */
const path = require('path')
const fs = require('fs')

const dataModel = require(path.join(
  __dirname,
  '../../Sketch/Modules/SketchModel/Source/Sketch.xcdatamodeld.json'
))

function getOverrides(k) {
  const overridesPath = path.join(__dirname, `./schema/overrides/${k}.js`)
  return fs.existsSync(overridesPath) ? require(overridesPath) : {}
}

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
  MSPath: 'JSON',
  'NSObject<NSCopying>': 'JSON',
  NSArray: '[JSON]',
  MSImageData: 'JSON',
  // TODO: do something about it
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

function printAdditionalOverrides(attributes, relations, overrides) {
  const overridesToPrint = Object.keys(overrides).filter(
    k => !attributes[k] && !relations[k]
  )
  return overridesToPrint
    .map(
      k =>
        `\n    ${printDescription(overrides[k].description)}${k}: ${
          overrides[k].type
        }`
    )
    .join('')
}

function printAttributes(attributes, overrides) {
  return Object.keys(attributes)
    .map(attr => {
      const type =
        (overrides[attr] && overrides[attr].type) ||
        SCALAR_MAP[attributes[attr].type] ||
        attributes[attr].type

      if (type === 'undefined') {
        return ''
      }

      return `\n    ${printDescription(
        attributes[attr].description
      )}${attr}: ${type}${
        attributes[attr].optional || attributes[attr].default === 'nil'
          ? ''
          : '!'
      }`
    })
    .join('')
}

function printRelationships(relations, overrides) {
  return Object.keys(relations)
    .map(k => {
      const type =
        (overrides[k] && overrides[k].type) || relations[k].toMany
          ? `[${relations[k].type}!]`
          : relations[k].type

      if (type === 'undefined') {
        return ''
      }
      return `\n    ${printDescription(relations[k].description)}${k}: ${type}${
        relations[k].optional ? '' : '!'
      }`
    })
    .join('')
}

function printSupers(supers) {
  return supers
    .map(k => {
      const superClass = dataModel.classes[k]
      const overrides = getOverrides(k)
      return `${printAttributes(
        superClass.attributes,
        overrides
      )}${printRelationships(
        superClass.relationships,
        overrides
      )}${printAdditionalOverrides(
        superClass.attributes,
        superClass.relationships,
        overrides
      )}`
    })
    .join('')
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
  const overrides = getOverrides(k)
  fs.writeFileSync(
    path.join(__dirname, `./schema/generated/${k}.js`),
    `// ⚠️ DO NOT MODIFY THIS FILE DIRECTLY, IT WAS AUTO-GENERATED. See lib/generate-types.js
exports.name = '${k}'

exports.schema = \`
  ${
    c.dependants
      ? `\ninterface ${k}Interface {
    id: ID!
    _class: String!${printSupers(c.supers)}${printAttributes(
          c.attributes,
          overrides
        )}${printRelationships(
          c.relationships,
          overrides
        )}${printAdditionalOverrides(c.attributes, c.relationships, overrides)}
  }\n`
      : ''
  }
  type ${k}${c.supers[0] ? ` implements ${c.supers[0]}Interface` : ''} {
    id: ID!
    _class: String!${printSupers(c.supers)}${printAttributes(
      c.attributes,
      overrides
    )}${printRelationships(
      c.relationships,
      overrides
    )}${printAdditionalOverrides(c.attributes, c.relationships, overrides)}
  }
\`

exports.resolver = {
  id: l => l.do_objectID,${Object.keys(overrides)
    .map(
      o =>
        overrides[o].resolver
          ? `\n  ${o}: ${overrides[o].resolver.toString()},`
          : ''
    )
    .join('')}
}
`
  )

  console.log(`✓ ${k}`)
})
