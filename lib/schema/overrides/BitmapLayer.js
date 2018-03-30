module.exports = {
  image: {
    type: 'String',
    resolver: ({ image }) => {
      if (typeof image === 'string') {
        return image
      }
      if (image._class === 'MSJSONFileReference') {
        return image._ref
      }
      return JSON.stringify(image, null, 2)
    },
  },
}
