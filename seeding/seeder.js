'use strict'

require('module-alias/register')
const path = require('path')
const { Seeder } = require('mongo-seeding')

module.exports = {
  /**
  * Return the created seeder with the config given
  * @params {Object} config The config for the seeder
  * @return {Seeder} The seeder object
  **/
  get_seeder: (config) => {
    return new Seeder(config)
  },
  /**
  * Seed the database with the informations in data
  **/
  seed: async (folder = 'test', uri = null) => {
    const seeder = module.exports.get_seeder({
      database: uri,
      dropCollections: true
    })

    const collectionReadingOptions = {
      transformers: [
        Seeder.Transformers.replaceDocumentIdWithUnderscoreId
      ]
    }

    const collections = seeder.readCollectionsFromPath(
      path.resolve('./seeding/' + folder),
      collectionReadingOptions
    )
    return seeder.import(collections)
  }
}
