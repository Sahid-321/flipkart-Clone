import React,{useState,useContext} from 'react'
import {InputBase, Box, styled, Button, Typography, Badge} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginDialog from '../login/LoginDialog';
import { DataContext } from '../../context/DataProvider';
import Profile from './Profile';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Wrapper = styled(Box)(({ theme }) => ({
    margin: '0 3% 0 auto',
    display: 'flex',
    '& > *': {
        marginRight: '40px !important',
        textDecoration: 'none',
        color: '#FFFFFF',
        fontSize: 12,
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            color: '#2874f0',
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            marginTop: 10
        }
    },
    [theme.breakpoints.down('sm')]: {
        display: 'block'
    }
}));

const Container = styled(Link)(({ theme }) => ({
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
        display: 'block'
    }
}));


const LoginButton = styled(Button)(({ theme }) => ({
    color: '#2874f0',
    background: '#FFFFFF',
    textTransform: 'none',
    fontWeight: 600,
    borderRadius: 2,
    padding: '5px 40px',
    height: 32,
    boxShadow: 'none',
    '&:hover':{
        color:'white',
        backgroundColor: '#2874f0',
    },
    [theme.breakpoints.down('sm')]: {
        background: '#2874f0',
        color: '#FFFFFF'
    }
}));

const CustomButtons = () => {

    const {cartItems}=useSelector(state=>state.cart);

    const [open,setOpen]=useState(false);

    const {account,setAccount}=useContext(DataContext);

    const openDialog=()=>{
        setOpen(open?false:true);
    }

  return (
    <Wrapper>
        {
            account?<Profile account={account} setAccount={setAccount}/>:
                <LoginButton variant="contained" onClick={()=>openDialog()}>Login</LoginButton>
        }
        <Typography style={{margin:'auto 0', fontSize:14, width:120}}>Become a Seller</Typography>
        <Typography style={{margin:'auto 0', fontSize:14}}>More</Typography>
        <Container to="/cart">
            <Badge badgeContent={cartItems.length} color="secondary">
                <ShoppingCartIcon/>
            </Badge>
            <Typography style={{marginLeft:10}}>Cart</Typography>
        </Container>
        <LoginDialog open={open} setOpen={setOpen}/>
    </Wrapper>
  )
}

export default CustomButtons