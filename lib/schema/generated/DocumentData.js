// ⚠️ DO NOT MODIFY THIS FILE DIRECTLY, IT WAS AUTO-GENERATED. See lib/generate-types.js
exports.name = 'DocumentData'

exports.schema = `
  
  type DocumentData {
    id: ID!
    _class: String!
    userInfo: JSON
    currentPageIndex: Int!
    colorSpace: ColorSpace!
    assets: AssetCollection!
    foreignLayerStyles: [ForeignLayerStyle!]!
    pages: [Page!]!
    foreignSymbols: [ForeignSymbol!]!
    layerStyles: SharedStyleContainer!
    layerTextStyles: SharedTextStyleContainer!
    layerSymbols: SymbolContainer!
    foreignTextStyles: [ForeignTextStyle!]!
  }
`

exports.resolver = {
  id: l => l.do_objectID,
}
