/**
* The models of the extra book
* @module models/extra_book
*/
'use strict'

const mongoose = require('mongoose')
const path = require('path')
const filename = path.basename(__filename, '.js')

// Subset pattern
const schema = new mongoose.Schema({
  artist_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'artist'
  },
  name: {
    type: String
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
