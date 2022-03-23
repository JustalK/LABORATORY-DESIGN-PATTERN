/**
* The models of the product
* @module models/product
*/
'use strict'

const mongoose = require('mongoose')
const path = require('path')
const filename = path.basename(__filename, '.js')

// Three Pattern
// The three pattern using the database (reduce cost on db)
// We save the actual category inside the parent category
// We save the categories under in orders inside the ancestor
const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  parent_category: {
    type: String,
    required: true
  },
  ancestor_category: [{
    type: String
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
