import React, { useEffect, useState } from 'react'
import '../Slider/Slider.css'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Link } from 'react-router-dom';

const Slider = () => {
    const[slide, setSlide] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=5')
            .then(res=>res.json())
            .then(json=>setSlide(json))
    }, [])
    const colorarr =['#F4DFFE','#B443FC','#FF61FA','#FF8A64','#F5DDB7']
  return (
    <div>
      <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => {/*...*/}}
      onReachEnd={() => {/*...*/}}
    >
        {
            slide.map((item,index)=>
                <SwiperSlide className='slide w-[100%] h-[100%]' key={index}>
                   <div>
                   <div className='flex items-center justify-around w-full  ' style={{backgroundColor:colorarr[index]}}>
                   <div className='text-center item-info h-[450px] md:h-[125px]'>
                    <h2 className=' text-3xl '>{item.title}</h2>
                    <h3 className='font-bold'>${item.price}</h3>
                    <p>{item.description}</p>
                    <div className='flex items-center justify-center mt-6'>
                     <Link className='text-white font-bold p-3 w-[35%] md:w-[12%] bg-gray-800 hover:bg-[#B443FC] transition duration-[0.5s] rounded-[8px]' to=''><button>Buy Now</button></Link>
                   </div>
                   </div>
                   <div>
                    <img className='h-[256px] w-[450px] md:h-[385px] lg:h-[385px] md:w-[380px] flex items-center image transition-all duration-[.3s] ease-[0s]' src={item.image} alt="" />
                   </div>
                   </div>
                   </div>
                </SwiperSlide>
            )      
          }
    </Swiper>
    </div>
  )
}

export default Slider
