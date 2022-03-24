/**
* The models of the artist
* @module models/artist
*/
'use strict'

const mongoose = require('mongoose')
const path = require('path')
const filename = path.basename(__filename, '.js')

// Document Versioning Pattern
// The current and revision will be save into two different database
// The revision in the current database will be the latest and the new field revision will also be the total of revision
// When we update the document, we duplicate the previous version into the revision_artist with the actual number of revision and we increase the revision in the current_artist.
const schema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String
  },
  revision: {
    type: Number,
    required: true
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
