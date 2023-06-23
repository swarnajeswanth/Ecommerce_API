
// Importing  Mongoose Library
const mongoose=require('mongoose');


// Creatinga a Collection with Schema Function
const product=mongoose.Schema({

    // Schema Design 
    name:{
        type:String,
        require:true
    },
    quantity:{
        type:Number,
        require:true
    }
})

// Model Creating & Exporting the Model 
const Products=mongoose.model('products',product);

module.exports=Products;
