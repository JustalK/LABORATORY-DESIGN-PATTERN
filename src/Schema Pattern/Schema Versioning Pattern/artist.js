/**
* The models of the artist
* @module models/artist
*/
'use strict'

const mongoose = require('mongoose')
const path = require('path')
const filename = path.basename(__filename, '.js')

// https://www.mongodb.com/blog/post/building-with-patterns-the-schema-versioning-pattern
// You add a field schema_version for knowing at one version of schema a document is corresponding
// It then become easy to make a migration of the document of a same version
const schema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String
  },
  schema_version: {
    type: Number,
    default: 2
  }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
  collection: filename,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
})

module.exports = mongoose.model(filename, schema)
