import { InputBase,Box,styled } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import React from "react";

const SearchContainer = styled(Box)`
background: #fff;
width: 38%;
border-radius: 2px;
margin-left: 10px;
display: flex;
`
const InputeSearch = styled(InputBase)`
padding-left: 20px;
width:100%;
color:black;
font-size: unset;
`
const SearchIconBase = styled(Box)`
color: blue;
padding: 5px;
`

const Search = ()=>{
    return (
        <SearchContainer>
            <InputeSearch placeholder="Search for products, brands and more"/>
         <SearchIconBase>
            <SearchIcon/>
         </SearchIconBase>
        </SearchContainer>
    )
}
export default Search;