const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Book = require('./book').schema

const AuthorSchema = new Schema({
    name: String,
    age: Number,
    books: [Book]
})

const Author = mongoose.model('author', AuthorSchema)

module.exports = Author