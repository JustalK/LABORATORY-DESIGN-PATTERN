/**
* The models of the extra book
* @module models/extra_book
*/
'use strict'

const mongoose = require('mongoose')
const path = require('path')
const filename = path.basename(__filename, '.js')

// In this 1-1 relation, we put new book inside it if there is more than a certain limit
const schema = new mongoose.Schema({
  name: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'artist'
  },
  book: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'book'
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
