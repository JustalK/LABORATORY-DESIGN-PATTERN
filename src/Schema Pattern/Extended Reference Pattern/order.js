/**
* The models of the artist
* @module models/artist
*/
'use strict'

const mongoose = require('mongoose')
const path = require('path')
const filename = path.basename(__filename, '.js')

// Extended Reference Pattern
// Instead of linking the customer in the order, we duplicate the data for faster read on join db
const schema = new mongoose.Schema({
  number: {
    type: String,
    required: true
  },
  customer: {
    firstname: String,
    lastname: String
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
