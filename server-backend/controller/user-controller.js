import User from "../model/user-schema.js";

export const userSingup = async(req, res) => {
    try {

        const exist=await User.findOne({username:req.body.username});
        if(exist){
            res.status(401).json({message:'username already exist'});
        }

        const user=req.body;
        const newUser=new User(user);
        await newUser.save();
        res.status(200).json({message:user});
    } catch (err) {
        res.status(500).json({message:err.message});
    }
}


export const userLogin = async(req, res) => {
    try {
        const username=req.body.username;
        const password=req.body.password;
        const user=await User.findOne({username:username,password:password});
        if(user){
            res.status(200).json({data:user});
        }else{
            res.status(401).json(`Invalid Login Credentials`);
        }
    } catch (err) {
        res.status(500).json(`Error: ${err.message}`);
    }
}