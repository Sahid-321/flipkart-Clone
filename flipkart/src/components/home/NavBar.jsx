import React from "react";
import { Box, styled, Typography } from "@mui/material"
import { navData } from "../../constant/data";

const Container = styled(Box)`
display :flex;
margin: 55px 130px 0 130px;
justify-content: space-between;
`
const Component = styled(Box)`
padding: 12px 8px;
text-align: center;
`
const Text = styled(Typography)`
text-size: 14px;
text-weight: 600;
parent-family: inherit;
`
const NavBar = () => {
    return (
        <Container>
            {
                navData.map(data => (
                    <Component>
                        <img src={data.url} alt="nav"  style={{width: 64}}/>
                        <Text>{data.text}</Text>
                    </Component>
                ))
            }


        </Container>
    )
}
export default NavBar;