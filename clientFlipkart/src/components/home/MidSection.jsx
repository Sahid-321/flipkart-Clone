import React from 'react'
import { Box, styled, Typography, Button, Divider, Grid } from '@mui/material';
import { imageURL } from '../../constants/data';

const Wrapper=styled(Grid)`
  margin-top:10px;
`

const MultiChild=styled(Grid)`
  border-left: 5px solid #cecece;
  border-right: 5px solid #cecece;
`

const Image = styled('img')(({ theme }) => ({ 
  display: 'flex',
  marginTop: 20,
  justifyContent: 'space-between',
  width: '100%',
  [theme.breakpoints.down('md')]: {
      objectFit: 'cover',
      height: 120
  }
}));

const MidSection = () => {

  const url = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';

  return (
    <>
    <Wrapper lg={12} sm={12} md={12} xs={12} container>
      {
        imageURL.map(el => (
          <MultiChild item lg={4} md={4} sm={12} xs={12}>
            <img src={el} alt="" style={{width:"100%"}}/>
          </MultiChild>
        ))
      }
    </Wrapper>
    <Image src={url} alt="" />
    </>
  )
}

export default MidSection