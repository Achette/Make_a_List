import React from 'react'
import Slider from 'react-slick'
import { Slide } from '../Slide'
import { slider } from '../../mock/sliderMock'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Box } from '@chakra-ui/react'

export const MySlider = () => {
  const data = slider

  const settings = {
    className: 'center',
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  }

  return (
    <Box>
      <Slider {...settings}>
        {data.map((item, index) => (
          <Slide key={index} title={item.title} content={item.content} />
        ))}
      </Slider>
    </Box>
  )
}
