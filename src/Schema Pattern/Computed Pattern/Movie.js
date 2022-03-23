/**
* The models of the movie
* @module models/movie
*/
'use strict'

const mongoose = require('mongoose')
const path = require('path')
const filename = path.basename(__filename, '.js')

// Computed Pattern
// The total revenue is calculated from the Theater
const schema = new mongoose.Schema({
  movie: {
    type: String
  },
  revenue_total: {
    type: Number
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
