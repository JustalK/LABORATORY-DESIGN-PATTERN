/**
* The models of the product_alternative
* @module models/product_alternative
*/
'use strict'

const mongoose = require('mongoose')
const path = require('path')
const filename = path.basename(__filename, '.js')

// Three Pattern
// This pattern make use of the graphLookup which mean is costly on the queries
// We save the parent and the ancestor just under
const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  parent_category: {
    type: String,
    required: true
  },
  ancestor_category: {
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
