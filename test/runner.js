'use strict'

require('module-alias/register')
require('dotenv').config({ path: '@test/env/.env.test' })
const { performance } = require('perf_hooks')

const test = require('ava')
const mongo = require('@test/libs/mongo')
const m_seeding = require('@seeding/seeder')

const test_0 = require('@test/cases/Generating Objects/Abstract Factory Pattern/test')
const test_1 = require('@test/cases/Generating Objects/Factory Pattern/test')
const test_2 = require('@test/cases/Generating Objects/Singleton Pattern/test')
const test_3 = require('@test/cases/Database Pattern/Data Mapper/test')
const test_4 = require('@test/cases/Database Pattern/Unit Of Work/test')
const test_5 = require('@test/cases/Database Pattern/Lazy Load/test')
const test_6 = require('@test/cases/Database Pattern/Domain Object Assembler/test')

let start = null
let end = null

test.before(async () => {
  start = performance.now()
})

test.before(async () => {
  const uri = await mongo.connect()
  await m_seeding.seed('test', uri)
})

test.after(async () => {
  await mongo.disconnect()
})

test.after(async () => {
  end = performance.now()
  console.log(`Tests done in ${end - start} ms.`)
})

test_6.cases(test)
test_5.cases(test)
test_4.cases(test)
test_2.cases(test)
test_1.cases(test)
test_0.cases(test)
test_3.cases(test)
