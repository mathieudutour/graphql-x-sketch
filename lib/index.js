const yargs = require('yargs')
const DocumentStore = require('./document-store')

const { argv } = yargs
  .option('run', {
    alias: 'r',
    describe: 'Run the GraphQL query',
    type: 'string',
  })
  .option('variables', {
    describe: 'The variables of the GraphQL query to run',
    type: 'string',
  })
  .option('dev', {
    alias: 'd',
    describe: 'Watch and generate the GraphQL schema from that json file',
    type: 'string',
  })
  .help()
  .strict()

const paths = argv._

DocumentStore(paths).then(({ getDocument, onEvent }) => {
  if (argv.run) {
    require('./run')(getDocument, argv.run, argv.variables)
    return
  }
  require('./watch')(paths, onEvent, () => {
    process.exit(1)
  })
  require('./serve')(getDocument)
})
