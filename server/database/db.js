import mongoose from "mongoose"
export const Connection = async (username, password)=>{
    const URL = `mongodb+srv://${username}:${password}@ecommerce.qxk5j1r.mongodb.net/?retryWrites=true&w=majority`;
    try {
      await  mongoose.connect(URL, {useUnifiedTopology:true, useNewUrlParser:true})
        console.log("connection sucessful");
    } catch (error) {
        console.log(`Error while connecting`, error.message);
    }
}


export default Connection;