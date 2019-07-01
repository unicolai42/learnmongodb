const assert = require('assert')
const MarioChar = require('../models/mariochar')

describe('Updating records',  () => {
    let char
    beforeEach((done) => {
        char = new MarioChar({
            name: 'Mario',
            weigth: 50
        })
        char.save().then(() => {
            assert(!char.isNew)
            done()
        })
    })
    it('Update a record from the db', (done) => {
        MarioChar.updateOne({_id: char._id}, {name: "Yosh"}).then(() => {
            MarioChar.findOne({_id: char._id}).then((result) => {
                assert(result.name === "Yosh")
                done()
            })
            
        })
    })

    it('Increment the weigth by one', (done) => {
        MarioChar.updateMany({}, {$inc: {weigth: 1}}).then(() => {
            MarioChar.findOne({_id: char._id}).then((result) => {
                assert(result.weigth === 51)
                done()
            })
            
        })
    })
}) 