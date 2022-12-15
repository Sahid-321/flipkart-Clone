import React from 'react'
import Carousel from "react-multi-carousel";
import { bannerData } from '../../constants/data';
import {Box, styled, Typography} from '@mui/material';
import 'react-multi-carousel/lib/styles.css';

const Image = styled('img')(({ theme }) => ({
  width: '100%',
  height: 280,
  [theme.breakpoints.down('sm')]: {
      objectFit: 'cover',
      height: 180
  }
}));

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
};

const Banner = () => {
  return (
    <Carousel 
    responsive={responsive}
    dotListClass="custom-dot-list-style"
    itemClass="carousel-item-padding-40-px"
    containerClass="carousel-container"
    swipeable={false}
    draggable={false}
    infinite={true}
    autoPlaySpeed={4000}
    autoPlay={true} 
    slidesToSlide={1}
    keyBoardControl={true}
    ssr={true}>
        {
            bannerData.map((el,idx)=>(
                <div key={idx}>
                <Image src={el.url} alt="" />
                </div>
            ))
        }
    </Carousel>
  )
}

export default Banner