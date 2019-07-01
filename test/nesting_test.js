const assert = require('assert')
const mongoose = require('mongoose')
const Author = require('../models/author')

describe('Nesting records', () => {
    beforeEach((done) => {
        mongoose.connection.collections.authors.drop(() => {
            done()
        })
    })
    it('Create an author with sub-documents', (done) => {
        const pat = new Author({
            name: 'Pat',
            books: [
                {
                    title: "n",
                    pages: 4
                }
            ]
        })
        pat.save().then(() => {
            Author.findOne({name: 'Pat'}).then((record) => {
                assert(record.books.length === 1)
                done()
            })
        })
    })
    it('Add a book to an author', (done) => {
        const pat = new Author({
            name: 'Pat',
            books: [
                {
                    title: "n",
                    pages: 4
                }
            ]
        })
        pat.save().then(() => {
            Author.findOne({name: 'Pat'}).then((record) => {
                record.books.push({title: 'm', pages: 3})
                record.save().then(() => {
                    Author.findOne({name: 'Pat'}).then((record) => {
                        assert(record.books.length === 2)
                        done()
                    })
                })
            })
        })
    })
})