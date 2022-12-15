import Product from "../model/product-schema.js";

export const getProducts=async(req,res)=>{
    try {
        const products=await Product.find({});
        res.status(200).json(products);
    } catch (err) {
        res.status(500).json({message:err.message});
    }
}

export const getProductById = async (request, response) => {
    try {
        const products = await Product.findOne({ 'id': request.params.id });
        response.status(200).json(products);
    }catch (error) {
        response.status(500).json({message:error.message});
    }
}