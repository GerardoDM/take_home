import mongoose from 'mongoose'
const { Schema } = mongoose

const ProductSchema = new Schema({
    id: {
        type: Number
    },
    sku: {
        type: String, 
    },
    cantidad: {
        type: Number,
    },
   
})

module.exports = mongoose.model('Product', ProductSchema);