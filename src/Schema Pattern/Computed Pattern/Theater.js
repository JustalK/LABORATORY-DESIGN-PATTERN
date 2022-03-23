/**
* The models of the theater
* @module models/theater
*/
'use strict'

const mongoose = require('mongoose')
const path = require('path')
const filename = path.basename(__filename, '.js')

// Computed Pattern
// This pattern is good for saving computed information such as the total revenue here
// Instead of calculating the total revenue everytime the user need it, we change the movie db with the total when there is a modification on Theater
// Or once in a while if we are using approximation Pattern too
const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  movie: {
    type: String
  },
  revenue: {
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
