import { products } from "./constant/data.js"
import Product from "./model/product-schema.js";

const Default= async ()=>{
try {

  await  Product.insertMany(products);
    console.log("data save successful");
} catch (error) {
    console.log("Error while inserting default data", error.message);
}

}
export default Default;