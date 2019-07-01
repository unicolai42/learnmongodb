const assert = require('assert')
const MarioChar = require('../models/mariochar')

describe('Find a record',  () => {
    let char
    beforeEach((done) => {
        char = new MarioChar({
            name: 'Mario'
        })
        char.save().then(() => {
            assert(!char.isNew)
            done()
        })
    })
    it('Find a record from the db', (done) => {
        MarioChar.findOne({_id: char._id}).then((result) => {
            assert(result.name === "Mario")
            done()
        })
    })
})