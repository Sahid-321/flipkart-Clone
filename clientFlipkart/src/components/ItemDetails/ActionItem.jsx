import { useState } from 'react';

import { Button, Box, styled } from '@mui/material';
import { ShoppingCart as Cart, FlashOn as Flash } from '@mui/icons-material';

import { useNavigate } from 'react-router-dom';
import { payUsingPaytm } from '../../service/api';
import { post } from '../../utils/paytm';

import { addToCart } from '../../redux/actions/cartActions';
import { useDispatch } from 'react-redux';

const LeftContainer = styled(Box)(({ theme }) => ({
    minWidth: '40%',
    padding: '40px 0 0 80px',
    marginRight:"20px",
    // border:'1px solid red',
    [theme.breakpoints.down('md')]: {
        padding: '20px 40px'
    }
}))

const Image = styled('img')({
    width: '90%',
    padding: '15px'
});

const StyledButton = styled(Button)`
    width: 48%;
    border-radius: 2px;
    height: 50px;
    color: #FFF;
`;

const ActionItem = ({ product }) => {
    const navigate = useNavigate();
    const { id } = product;
        
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    const buyNow = async () => {
        let response = await payUsingPaytm({ amount: 500, email: 'mdtalibansari55048@gmail.com'});
        var information = {
            action: 'https://securegw-stage.paytm.in/order/process',
            params: response    
        }
        post(information);
    }

    const addItemToCart = () => {
        dispatch(addToCart(id, quantity));
        navigate('/cart');
    }

    return (
        <LeftContainer>
            <Box style={{padding: '15px 20px', border: '1px solid #f0f0f0'}}>
            <Image src={product.detailUrl} /><br />
            </Box>
            <StyledButton onClick={()=>addItemToCart()} style={{marginRight: 10, background: '#ff9f00'}} variant="contained"><Cart />Add to Cart</StyledButton>
            <StyledButton onClick={()=>buyNow()} style={{background: '#fb641b'}} variant="contained"><Flash /> Buy Now</StyledButton>
        </LeftContainer>
    )
}

export default ActionItem;