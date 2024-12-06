import React from 'react'
import './Blog.css'
import logo from '../../assets/blog-1.jpg'
import logo1 from '../../assets/blog-2.jpg'
import logo2 from '../../assets/blog-3.jpg'

const Blog = () => {
  return (
    <div>
      <div className='blog-wrapper'>
        <div><h1 className='text-center font-bold text-5xl text-center p-6 mt-[50px] mb-[30px]'>OUR BLOG</h1></div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 w-[85%] mx-auto blog-info relative '>
        <div className=' blog-info relative mb-[40px] md:mb-0'>
        <div className='overflow-hidden'>
            <img className='h-[370px] w-full blog-image' src={logo} alt=''/>
            
        </div>
        <div className='blog-text absolute left-[68px] md:left-[90px] bottom-[-50px] bg-white text-center border-2 border-gray-300 w-[60%] '>
                <h1 className='font-bold text-3xl hover:text-[#B443FC] transition duration-400'>A guide to latest <br /> trends</h1>
                <h4 className='text-gray-400 opacity-75'>By Admin</h4>
            </div>
        </div>
        <div className=' blog-info relative mb-[40px] md:mb-0'>
        <div className='overflow-hidden'>
            <img className='h-[370px] w-full blog-image' src={logo1} alt=''/>
            
        </div>
        <div className='blog-text1 absolute left-[56px] md:left-[84px] bottom-[-50px] bg-white text-center border-2 border-gray-300 w-[64%] '>
                <h1 className='font-bold text-3xl hover:text-[#B443FC] transition duration-400'>Five ways to lead a<br /> happy life</h1>
                <h4 className='text-gray-400 opacity-75'>By Admin</h4>
            </div>
        </div>
        <div className=' blog-info relative mb-[40px] md:mb-0'>
        <div className='overflow-hidden'> 
            <img className='h-[370px] w-full blog-image' src={logo2} alt=''/>
            
        </div>
        <div className=' w-[60%]'>
            <div className='blog-text2 absolute left-[56px] md:left-[100px] bottom-[-50px] bg-white text-center border-2 border-gray-300'>
                <h1 className='font-bold text-3xl hover:text-[#B443FC] transition duration-400'>Tips on having a <br /> happy life</h1>
                <h4 className='text-gray-400 opacity-75'>By Admin</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
