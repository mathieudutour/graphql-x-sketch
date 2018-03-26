exports.schema = `
  type Document {
    id: ID!
    filePath: String!
    name: String!
    pages: [Page!]
    allLayers(
      class: String
      name: String
    ): [LayerInterface!]
  }
`

exports.resolver = {
  id: doc => doc.document.do_objectID,
  pages: doc => doc.document.pages.map(p => doc.pages[p._ref]),
  allLayers: (doc, { class: className, name }) => {
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

    if (className) {
      layers = layers.filter(l => l._class === className.toLowerCase())
    }
    if (name) {
      layers = layers.filter(l => l.name === name)
    }
    return layers
  },
}
