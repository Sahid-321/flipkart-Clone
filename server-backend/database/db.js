import mongoose from "mongoose";

export const Connection=async(USERNAME,PASSWORD)=>{

    const url=`mongodb+srv://${USERNAME}:${PASSWORD}@ecommerce.qxk5j1r.mongodb.net/?retryWrites=true&w=majority`;

    try {
        await mongoose.connect(url,{useUnifiedTopology:true});
        console.log(`Database Connected`);
    } catch (err) {
        console.log(`Error while connecting to the database`,err);
    }
}