import express from "express";
import { userSingup,userLogin } from "../controller/user-controller.js";
// import { getProducts } from "../controller/product-controller.js";
import { getProductById, getProducts } from '../controller/product-controller.js';
// import { addItemInCart } from '../controller/cart-controller.js';
import { addPaymentGateway, paymentResponse } from '../controller/payment-controller.js';

const router=express.Router();

router.post("/signup",userSingup);
router.post("/login",userLogin);
router.get("/products",getProducts);
router.get('/product/:id', getProductById);

// router.post('/cart/add', addItemInCart);

router.post('/payment', addPaymentGateway);
router.post('/callback', paymentResponse);

export default router;