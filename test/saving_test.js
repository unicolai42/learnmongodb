const assert = require('assert')
const MarioChar = require('../models/mariochar')

describe('Saving records',  () => {
    it('Save a record to the db', (done) => {
        const char = new MarioChar({
            name: 'Mario'
        })

        char.save().then(() => {
            assert(!char.isNew)
            done()
        })
    })
})