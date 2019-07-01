const Author = require('../models/author')
const Book = require('../models/book')
const mongoose = require('mongoose')

// mongoose.connect('mongodb://localhost/ugo', { useNewUrlParser: true });

var db = mongoose.connection

db.once('open', function() {
    console.log("Connection Successful!");
    
    // var BookSchema = mongoose.Schema({
    //   name: String,
    //   price: Number,
    //   quantity: Number
    // });
 
    // var Book = mongoose.model('Book', BookSchema, 'bookstore');
 
    // var book1 = new Book({ name: 'Introduction to Mongoose', price: 10, quantity: 25 });
 
    // book1.save(function (err, book) {
    //   if (err) return console.error(err);
    //   console.log(book.name + " saved to bookstore collection.");
    // });

    const a = new Book({
        title: 'a',
        pages: 1
    })
    
    const b = new Book({
        title: 'b',
        pages: 2
    })
    
    a.save()
    b.save()
    
    const ugo = new Author({
        name: 'ugo',
        age: 25,
        books: [
            a, b
        ]
    })
    
    ugo.save((err, res) => {
        console.log('ugo saved' + res)
    })
    
});

