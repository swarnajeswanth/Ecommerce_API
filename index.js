
// Importing & Executing the Express Library 
const express = require('express');
const app = express();

// Creating a port Variable for Getting req & res
const port =8000;

// Importing the Mongoose Configuration
const mongodb=require('./Config/mongoose');

// importing the Product Model/Collection
const product_route=require('./Routes/products');

// We have Created a form for product creation, you can check it out   url : localhost:8000/ . So I have installed the ejs for Product scalelability
// Setting up the View Engine
app.set('view engine','ejs');
app.set('views','./views');

// Configuration of the MiddleWare 
app.use(express.static('./assets'));

//Middleware for Reading the Params data
app.use(express.urlencoded({
    extended: false
 }));
 
//  Middleware for '/product' route
 app.use('/products',product_route);


//  Home page Router and controller
 app.get('/',function(req,res){
     res.render('Home')
    })


// Server Creation 
app.listen(port,(err)=>{
    if(err){
        console.log(`Error While Creating the server ${err}`);
    }
    console.log(`Server is up and Running at port ${port}`);
})