// Importing the Express Library
const express=require('express');
const router=express.Router();
// Importing the Controller Functions for Various Routes
const {get,create,getId,deleteId,updateProduct}=require('../Controllers/products');

// Get Routes

// Route for Getting all Products 
router.get('/',get);
// Route for Getting a Specific Product by Id
router.get('/:id',getId);

// Post Routes

// Creting a Product 
router.post('/create',create);
// Deleting a Product
router.delete('/:id',deleteId);
// Updating a Specific Document Field in Mongo DB
router.post('/:id/update_quantity',updateProduct);

module.exports=router;