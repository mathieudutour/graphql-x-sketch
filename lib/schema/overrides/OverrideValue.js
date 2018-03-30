module.exports = {
  value: {
    type: 'String',
    resolver: ({ value }) => {
      if (typeof value === 'string') {
        return value
      }
      if (value._class === 'MSJSONFileReference') {
        return value._ref
      }
      return JSON.stringify(value, null, 2)
    },
  },
  type: {
    type: 'String!',
    resolver: ({ overrideName }) => overrideName.split('_')[1],
  },
}
