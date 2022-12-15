import mongoose from "mongoose";

const productSchema=new mongoose.Schema({
    id:{
        type:String,
        unique:true
    },
    url:{
        type:String
    },
    detailUrl:{
        type:String
    },
    title:{
        type:Object
    },
    price:{
        type:Object
    },
    quantity:{
        type:Number
    },
    description:{
        type:String
    },
    discount:{
        type:String
    },
    tagline:{
        type:String
    }
})

const Product=mongoose.model(`product`,productSchema);

export default Product