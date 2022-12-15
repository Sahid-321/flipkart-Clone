import React from 'react'
import {Box, styled, Typography} from '@mui/material';
import { navData } from '../../constants/data';

const Component = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    margin: '55px 130px 0 130px !important',
    overflowX: 'overlay',
    [theme.breakpoints.down('lg')]: {
        margin: '0px !important'
    }
}))

const Container=styled(Box)`
    padding:12px 8px;
    text-align:center;
`

const Text=styled(Typography)`
    font-size:14px;
    font-weight:600;
    font-family:inherit;
`

const Navbar = () => {
  return (
    <Component>
        {
            navData.map((el,idx)=>{
                return <Container key={idx}>
                    <img src={el.url} style={{width:64}} alt=""/>
                    <Text>{el.text}</Text>
                </Container>
            })
        }
    </Component>
  )
}

export default Navbar