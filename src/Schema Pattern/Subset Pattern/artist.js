/**
* The models of the artist
* @module models/artist
*/
'use strict'

const mongoose = require('mongoose')
const path = require('path')
const filename = path.basename(__filename, '.js')

// Subset pattern
// In the field "books", we save the x more recent books (or the one we gonna show on the website the more often depending on filter)
// In the collection book, we will add all the book of the artist
// This way, we reduce the load on the database, we reduce the number of join
const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  books: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'book'
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
