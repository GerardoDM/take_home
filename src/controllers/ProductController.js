const Product = require('../models/Product');

export async function createProduct (req, res)  {
    try {
        
        const { id, sku, cantidad } = req.body;
        const newProduct = new Product({ id, sku, cantidad});
        await newProduct.save();
        res.status(201).send(newProduct)
        
      } catch (e) {
       console.log(e)
   }
}

export async function getProducts (req, res)  {
    try {

        const Products = await Product.find().lean()
       // res.status(201).send(Products)
        res.render('products/products', { Products })
        
      } catch (e) {
       console.log(e)
   }
}