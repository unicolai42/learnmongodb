const mongoose = require('mongoose')

before((done) => {
    mongoose.connect('mongodb://localhost/ugo', { useNewUrlParser: true })

    mongoose.connection.once('open', () => {
        console.log('Connection to mongoDB done')
        done()
    }).on('error', (err) => {
        console.log('Connection error: ', err)
    })
})

beforeEach((done)=> {
    mongoose.connection.collections.mariochars.drop(() => {
        done()
    })
})