import { products } from "./constants/data.js";
import Product from "./model/product-schema.js";

const DefaultData=async()=>{
    try {
         await Product.deleteMany({});
        await Product.insertMany(products);
        console.log(`Data Imported Successfully`);
    } catch (err) {
        console.log(`Error while inserting default data`, err.message);
    }
}

export default DefaultData