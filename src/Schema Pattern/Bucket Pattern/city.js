/**
* The models of the city
* @module models/city
*/
'use strict'

const mongoose = require('mongoose')
const path = require('path')
const filename = path.basename(__filename, '.js')

// Bucket Pattern
// In this pattern instead of saving one temperature every time, we gonna save a group of temperatures inside the an object
// So the temperatures field here, will regroup a group of temperature between two dates.
const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  temperatures: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'temperature'
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
