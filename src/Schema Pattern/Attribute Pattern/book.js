/**
* The models of the artist
* @module models/artist
*/
'use strict'

const mongoose = require('mongoose')
const path = require('path')
const filename = path.basename(__filename, '.js')

// https://www.mongodb.com/blog/post/building-with-patterns-the-attribute-pattern
const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  // { "releases.location": 1, "releases.date": 1} easy indexes
  releases: [{
    location: String,
    date: Date
  }]
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
