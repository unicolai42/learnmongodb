const assert = require('assert')
const MarioChar = require('../models/mariochar')

describe('Deleting records',  () => {
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
    it('Delete a record from the db', (done) => {
        MarioChar.deleteOne({_id: char._id}).then(() => {
            MarioChar.findOne({name: "Mario"}).then((result) => {
                assert(!result)
                done()
            })
        })
    })
}) 