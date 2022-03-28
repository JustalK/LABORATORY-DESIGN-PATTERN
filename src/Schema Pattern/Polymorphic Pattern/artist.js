/**
* The models of the artist
* @module models/artist
*/
'use strict'

const mongoose = require('mongoose')
const path = require('path')
const filename = path.basename(__filename, '.js')

// Polymorphic pattern
// Instead of using two collections, we put everything inside the same collection
// It reduce the number of read but make the document bigger and more complex
const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  artwork: {
    art: String, // Could be either a book or a painting, so some of the field are different
    title: String,
    pages: String,
    height: Number,
    width: Number,
    weight: Number,
    color: Number
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
