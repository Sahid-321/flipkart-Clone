import axios from 'axios';

const url=`http://localhost:8000`;

export const authenticateSignup=async(data)=>{
    try {
        return await axios.post(`${url}/signup`,data)
    } catch (err) {
        console.log('Error while calling signup api',err);
    }
}

export const authenticateLogin=async(data)=>{
    try {
        return await axios.post(`${url}/login`,data)
    } catch (err) {
        console.log('Error while calling login api',err);
        return err.response;
    }
}

export const getProductById = async (id) => {
    try {
        return await axios.get(`${url}/product/${id}`);
    } catch (error) {
        console.log('Error while getting product by id response', error);
    }
}

export  const payUsingPaytm = async (data) => {
    try {
        let response = await axios.post(`${url}/payment`, data);
        return response.data;
    } catch (error) {
        console.log('Error', error);
    }
}