// ⚠️ DO NOT MODIFY THIS FILE DIRECTLY, IT WAS AUTO-GENERATED. See lib/generate-types.js
exports.name = 'CurvePoint'

exports.schema = `
  
  type CurvePoint {
    id: ID!
    _class: String!
    
    hasCurveTo: Boolean
    curveMode: Int
    """
    The raw accessor for the receiver's location. Adjusting this does *not* affect curveFrom and curveTo; use -[MSCurvePoint movePointTo:] instead if you want those values to be kept consistent.
    """
    point: NSPoint
    curveFrom: NSPoint
    cornerRadius: Float
    curveTo: NSPoint
    hasCurveFrom: Boolean
    
  }
`

exports.resolver = {
  id: l => l.do_objectID,
}
