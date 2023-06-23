// Importing the DB Product Collection
const products=require('../Models/products');


// Controller for Getting all Products
module.exports.get=function(req,res){
    products.find({}).then((p)=>{
        
        // Returing a res with a JSON Object
        res.json({
            message:'success',
            data:p
        })
    })
}


// Getting Product by Id controller
module.exports.getId=function(req,res){

    // ID parameter from String Params
    let id =req.params.id;
    products.find({_id:id}).then((product)=>{

        // Returing a res with a JSON Object
        res.json({
            data:product
        })
    })
}


// Creating a New Product
module.exports.create=function(req,res){

    // name & Quantity parameter from query Params
    let {name,quantity}=req.body;
    let product={name,quantity};

    // Function for Creating a document in DB
    products.create({
        name:name,
        quantity:quantity
    }).then(()=>{

        // Returing a res with a JSON Object
        res.json({
            data:product
        })
    });
}


// Deleting a Product by ID
module.exports.deleteId=function(req,res){

    // ID parameter from String Params
    let id =req.params.id;

    // Function for Deleting a document in DB
    products.findOneAndDelete({_id:id}).then((product)=>{

        // Returing a res with a JSON Object
        res.json({
            message: "product deleted",
            data:product
        })
    })
}


// Updating the Product Fields in a Document
module.exports.updateProduct=function(req,res){
    let id=req.params.id;
    let number=req.body.number;

    // Function for Updating a document in DB
    products.findOneAndUpdate({_id:id},{quantity:number}).then(()=>{

        // Returing a res with a JSON Object
        res.json({
            message: "product Updated"
        })
    })
}