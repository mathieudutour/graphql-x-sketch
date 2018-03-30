#!/usr/bin/env node

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

if (!paths || !paths.length) {
  throw new Error('need to specify a path')
}

DocumentStore(paths).then(documentStore => {
  if (argv.run) {
    require('./run')(documentStore, argv.run, argv.variables)
    return
  }
  require('./watch')(paths, documentStore, () => {
    process.exit(1)
  })
  require('./serve')(documentStore)
})
