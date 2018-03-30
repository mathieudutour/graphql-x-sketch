// ⚠️ DO NOT MODIFY THIS FILE DIRECTLY, IT WAS AUTO-GENERATED. See lib/generate-types.js
exports.name = 'BitmapLayer'

exports.schema = `
  
  type BitmapLayer implements LayerInterface {
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
    resizingConstraint: Int!
    isFlippedVertical: Boolean
    originalObjectID: String
    isVisible: Boolean!
    pathInBounds: JSON
    resizingType: Int!
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
    fillReplacesImage: Boolean
    image: String
    """
    The scale the image was imported with into Sketch. This can be derived on import from the DPI of the image or the suffixes (@2x) of the filename. On legacy documents defaults to 0, which is meant to be the default image DPI of 72.
    """
    intendedDPI: Float
    clippingMask: NSRect!
  }
`

exports.resolver = {
  id: l => l.do_objectID,
  image: ({ image }) => {
      if (typeof image === 'string') {
        return image
      }
      if (image._class === 'MSJSONFileReference') {
        return image._ref
      }
      return JSON.stringify(image, null, 2)
    },
}
