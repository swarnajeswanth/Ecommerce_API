
// Importing the Mongoose Library
const mongoose=require('mongoose');

// Connecting with the Mongoose
mongoose.connect('mongodb://127.0.0.1/Products');

// Attaching the Connection to a Variable for Further Use
const db = mongoose.connection;

// Checking for Error While Connecting to DB
db.on('error',console.error.bind(console,'Error While connecting to database'));

// Checking if Connected
db.once('open',function(){
    console.log('Connected to DB');
})