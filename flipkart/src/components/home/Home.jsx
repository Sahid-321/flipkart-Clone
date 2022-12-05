import React from "react";
import Banner from "./Banner";
import NavBar from "./NavBar";
import {Box, styled} from "@mui/material"

const Wrapper= styled(Box)`
padding:  10px;
background: #F2F2F2;
`
const Home = ()=>{
    return(
        <>
           <NavBar/>
           <Wrapper>
           <Banner/>
           </Wrapper>
           
        </>
    )
}
export default Home;