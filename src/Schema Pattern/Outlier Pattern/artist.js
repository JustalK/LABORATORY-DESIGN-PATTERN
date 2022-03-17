/**
* The models of the artist
* @module models/artist
*/
'use strict'

const mongoose = require('mongoose')
const path = require('path')
const filename = path.basename(__filename, '.js')

// Outliner pattern
// All the books until a certain limit, let say 100 books, are saved inside books
// IF we have more books, we put has_extra with true and add the additionnal book inside the extra_book collection 
const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  books: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'book'
  }],
  has_extra: {
    type: Boolean,
    default: false,
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
