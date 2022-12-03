import { AppBar, Toolbar,styled,Box, Typography } from '@mui/material';

import React from 'react';
const StledHeader = styled(AppBar)`
background: #2874f0;
height: 55px
`
const Component = styled(Box)`
margin-left: 12%;
line-height:0
`
const Subheading = styled(Typography)`
font-size: 10px;
font-style: italic
`
const Header = ()=>{
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';

    return(
     
   <StledHeader>
    <Toolbar>
<Component>
<img src={logoURL} alt="logo" style={{width: 75}}/>
<Box>
    <Subheading>
        Explore&nbsp;
       <Box component="span" style={{color: "#FFE500"}}> plus</Box>
    </Subheading>
</Box>
</Component>
    </Toolbar>
   </StledHeader>
       
    )
}

export default Header;