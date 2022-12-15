import React,{useEffect} from 'react'
import {Box, styled} from '@mui/material';
import Navbar from './Navbar';
import Banner from './Banner';
import { getProducts } from '../../redux/actions/productActions';
import {useDispatch,useSelector} from 'react-redux';
import Slide from './Slide';
import MidSlide from './MidSlide';
import MidSection from './MidSection';

const Component=styled(Box)`
  padding:10px 10px;
  background:#cecece;
`

const Home = () => {

  const {products}=useSelector(state=>state.getProducts);

  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(getProducts());
  },[dispatch])

  console.log(<MidSection/>);

  return (
    <>
        <Navbar/>
        <Component>
          <Banner/>
          <MidSlide products={products} title="Deal of the Day" timer={true}/>
          <Slide products={products} title="Discounts for You" timer={false}/>
          <MidSection/>
          <Slide products={products} title="Suggested Items" timer={false}/>
          <Slide products={products} title="Top Selection" timer={false}/>
          <Slide products={products} title="Recommended Items" timer={false}/>
          <Slide products={products} title="Trending Offers" timer={false}/>
          <Slide products={products} title="Season's Top Picks" timer={false}/>
          <Slide products={products} title="Top Deals on Accessories" timer={false}/>
        </Component>
    </>
  )
}

export default Home