/**
* The models of the temperature
* @module models/temperature
*/
'use strict'

const mongoose = require('mongoose')
const path = require('path')
const filename = path.basename(__filename, '.js')

// Between the start and end date we will reroup all the temperature there
const schema = new mongoose.Schema({
  start_measured_on: {
    type: Date
  },
  end_measured_on: {
    type: Date
  },
  temperature: [{
    type: Number
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
