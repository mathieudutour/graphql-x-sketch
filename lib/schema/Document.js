exports.schema = `
  type Document {
    id: String!
    filePath: String!
    name: String!
    pages: [Page!]
    allLayers(
      type: String
      name: String
    ): [Layer!]
  }
`

exports.resolver = {
  id: doc => doc.document.do_objectID,
  pages: doc => doc.document.pages.map(p => doc.pages[p._ref]),
  allLayers: (doc, { type, name }) => {
    let layers = []
    function walkLayer(l) {
      layers.push(l)
      if (l.layers) {
        l.layers.forEach(walkLayer)
      }
    }
    Object.keys(doc.pages).forEach(p => {
      doc.pages[p].layers.forEach(walkLayer)
    })

    if (type) {
      layers = layers.filter(l => l._class === type.toLowerCase())
    }
    if (name) {
      layers = layers.filter(l => l.name === name)
    }
    return layers
  },
}
