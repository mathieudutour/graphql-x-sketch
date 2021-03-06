// ⚠️ DO NOT MODIFY THIS FILE DIRECTLY, IT WAS AUTO-GENERATED. See lib/generate-types.js
exports.name = 'LayerGroup'

exports.schema = `
  
  type LayerGroup implements LayerInterface {
    id: ID!
    _class: String!
    """
    When a shape is acting as a mask, this flag explicitly opts the receiver (and any folllowing layers) out of that masking, thereby breaking the chain.
    """
    shouldBreakMaskChain: Boolean!
    influenceRectForBounds: NSRect
    """
    The layer's rotation, specified in degrees. Rotation is applied about the center of \c frame
    """
    rotation: Float
    resizingConstraint: Constraint!
    isFlippedVertical: Boolean
    originalObjectID: String
    isVisible: Boolean!
    pathInBounds: JSON
    resizingType: LayerResizingType!
    isFlippedHorizontal: Boolean
    isLocked: Boolean!
    layerListExpandedType: LayerListStatus
    nameIsFixed: Boolean
    name: String!
    userInfo: JSON
    exportOptions: ExportOptions!
    """
    The underlying storage for a layer's origin and size, and whether its proportions should be constrained
    """
    frame: Rect!
    flow: FlowConnection
    style: Style!
    hasClickThrough: Boolean!
    sharedObjectID: String
    layers: [Layer!]!
  }
`

exports.resolver = {
  id: l => l.do_objectID,
}
