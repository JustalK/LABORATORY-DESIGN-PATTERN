/**
* The models of the temperature_alternate
* @module models/temperature_alternate
*/
'use strict'

const mongoose = require('mongoose')
const path = require('path')
const filename = path.basename(__filename, '.js')

// This is an alternative version where instead of saving between 2 dates, we are making sure a bucket contain 1000 items
const schema = new mongoose.Schema({
  count: {
    type: Number
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

/**
db.temperature_alternate.updateOne(
  { _id: "some_id", count: { $lt: 1000 } },
  {
    $push: {
      temperature: 35,
    },
    $inc: { count: 1 },
    $setOnInsert: { _id: "7000000_1541184190" },
  },
  { upsert: true }
);
**/
