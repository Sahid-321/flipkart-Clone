import React from "react";
import {Box , Button, Typography, styled} from "@mui/material"
import {ShoppingCart, StyleRounded} from '@mui/icons-material';

const Wrapper = styled(Box)`
display: flex;
margin: 0 3% 0 auto;
& > button, &>p, & > div{
    margin-right: 40px;
    font-size: 14px;
}

`
const Container = styled(Box)`
display:flex;
`;
const LoginButton = styled(Button)`
color: #2874f0;
background: #fff;
text-transform = none;
padding: 5px;
`

const CustomButtons = ()=>{
    return (
        <Wrapper>
<LoginButton variant = "contained">Login</LoginButton>
<Typography style={{marginTop:'3px'}}>Become a seller</Typography>
<Typography style={{marginTop:'3px'}}>More</Typography>
<Container >
<ShoppingCart/>
    <Typography>Cart</Typography>
</Container>
        </Wrapper>
    )
}
export default CustomButtons;