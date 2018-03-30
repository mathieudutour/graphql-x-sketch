// ⚠️ DO NOT MODIFY THIS FILE DIRECTLY, IT WAS AUTO-GENERATED. See lib/generate-types.js
exports.name = 'ShapeGroup'

exports.schema = `
  
  type ShapeGroup implements LayerInterface {
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
    clippingMaskMode: Float
    """
    Whether the shape should act as a mask or not. If so, all layers _above_ this one are masked by it, up until we reach either the end of the group, or a layer with \c shouldBreakMaskChain turned on.
    """
    hasClippingMask: Boolean
    windingRule: WindingRule!
  }
`

exports.resolver = {
  id: l => l.do_objectID,
}
