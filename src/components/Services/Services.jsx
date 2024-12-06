
import React from 'react'
import { FaComments } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BiLogoInstagramAlt } from "react-icons/bi";
import logo from '../../assets/blog-9.jpg'
import logo2 from '../../assets/blog-8.jpg'
import logo3 from '../../assets/blog-6.jpg'
import logo4 from '../../assets/blog-5.jpg'
import logo5 from '../../assets/blog-4.jpg'
import { Link } from 'react-router-dom';
import '../Services/Service.css'

const Services = ({ currentPage, totalPages, onPageChange }) => {
  
    const handlePageClick = (page) => {
      if (page >= 1 && page <= totalPages) {
        onPageChange(page);
      }
    };

   return (
    <div className='services w-[70%] mx-auto'>
      <div className='blog-wrapper grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6' >
      

    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white py-4">
      <img
        className="w-full h-48 object-cover img overflow-hidden"
        src={logo}
        alt="Sample"
      />
      <div className="p-6">
      <p className='flex gap-2 items-center'> 22 April, 2024 -4<FaComments /></p>
      <br />
        <h2 className="font-bold text-3xl mb-2">Ipsum blog post two</h2>
        <br />
        <p className="text-gray-700 text-2xl">
        Aenean sollicitudin, lorem quis on endum uctor nisi <br /> elitod the cona sequat ipsum, necas sagittis sem <br /> natoque nibh id penatibus
        </p>

      </div>
      <div className='flex justify-between items-center p-4'>
          <div><Link className='font-bold hover:text-[#B443FC]' to=''>Read More</Link></div>
          <div className='flex items-center gap-4'>
           
          <Link className='font-bold hover:text-[#B443FC]' to=''>Share:</Link>
          <Link className='text-[30px] text-blue-800' to=''><FaFacebook /></Link>
          <Link className='text-[30px] text-blue-500' to=''><AiFillTwitterCircle /></Link>
          <Link className='text-[30px] text-pink-500' to=''><BiLogoInstagramAlt /></Link>
          </div>
        </div>
      </div>

      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white py-4">
      <img
        className="w-full h-48 object-cover img overflow-hidden"
        src={logo2}
        alt="Sample"
      />
      <div className="p-6">
      <p className='flex gap-2 items-center'> 22 April, 2024 -4<FaComments /></p>
      <br />
        <h2 className="font-bold text-3xl mb-2">Ipsum blog post two</h2>
        <br />
        <p className="text-gray-700 text-2xl">
        Aenean sollicitudin, lorem quis on endum uctor nisi <br /> elitod the cona sequat ipsum, necas sagittis sem <br /> natoque nibh id penatibus
        </p>

      </div>
      <div className='flex justify-between items-center p-4'>
          <div><Link className='font-bold hover:text-[#B443FC]' to=''>Read More</Link></div>
          <div className='flex items-center gap-4'>
           
          <Link className='font-bold hover:text-[#B443FC]' to=''>Share:</Link>
          <Link className='text-[30px] text-blue-800' to=''><FaFacebook /></Link>
          <Link className='text-[30px] text-blue-500' to=''><AiFillTwitterCircle /></Link>
          <Link className='text-[30px] text-pink-500' to=''><BiLogoInstagramAlt /></Link>
          </div>
        </div>
      </div>

      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white py-4">
      <img
        className="w-full h-48 object-cover img overflow-hidden"
        src={logo3}
        alt="Sample"
      />
      <div className="p-6">
      <p className='flex gap-2 items-center'> 22 April, 2024 -4<FaComments /></p>
      <br />
        <h2 className="font-bold text-3xl mb-2">Ipsum blog post two</h2>
        <br />
        <p className="text-gray-700 text-2xl">
        Aenean sollicitudin, lorem quis on endum uctor nisi <br /> elitod the cona sequat ipsum, necas sagittis sem <br /> natoque nibh id penatibus
        </p>

      </div>
      <div className='flex justify-between items-center p-4'>
          <div><Link className='font-bold hover:text-[#B443FC]' to=''>Read More</Link></div>
          <div className='flex items-center gap-4'>
           
          <Link className='font-bold hover:text-[#B443FC]' to=''>Share:</Link>
          <Link className='text-[30px] text-blue-800' to=''><FaFacebook /></Link>
          <Link className='text-[30px] text-blue-500' to=''><AiFillTwitterCircle /></Link>
          <Link className='text-[30px] text-pink-500' to=''><BiLogoInstagramAlt /></Link>
          </div>
        </div>
      </div>

      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white py-4">
      <img
        className="w-full h-48 object-cover img overflow-hidden"
        src={logo4}
        alt="Sample"
      />
      <div className="p-6">
      <p className='flex gap-2 items-center'> 22 April, 2024 -4<FaComments /></p>
      <br />
        <h2 className="font-bold text-3xl mb-2">Ipsum blog post two</h2>
        <br />
        <p className="text-gray-700 text-2xl">
        Aenean sollicitudin, lorem quis on endum uctor nisi <br /> elitod the cona sequat ipsum, necas sagittis sem <br /> natoque nibh id penatibus
        </p>

      </div>
      <div className='flex justify-between items-center'>
          <div><Link className='font-bold hover:text-[#B443FC] p-4' to=''>Read More</Link></div>
          <div className='flex items-center gap-4'>
           
          <Link className='font-bold hover:text-[#B443FC]' to=''>Share:</Link>
          <Link className='text-[30px] text-blue-800' to=''><FaFacebook /></Link>
          <Link className='text-[30px] text-blue-500' to=''><AiFillTwitterCircle /></Link>
          <Link className='text-[30px] text-pink-500' to=''><BiLogoInstagramAlt /></Link>
          </div>
        </div>
      </div>

      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white py-4">
      <img
        className="w-full h-48 object-cover img overflow-hidden"
        src={logo5}
        alt="Sample"
      />
      <div className="p-6">
      <p className='flex gap-2 items-center'> 22 April, 2024 -4<FaComments /></p>
      <br />
        <h2 className="font-bold text-3xl mb-2">Ipsum blog post two</h2>
        <br />
        <p className="text-gray-700 text-2xl">
        Aenean sollicitudin, lorem quis on endum uctor nisi <br /> elitod the cona sequat ipsum, necas sagittis sem <br /> natoque nibh id penatibus
        </p>

      </div>
      <div className='flex justify-between items-center'>
          <div><Link className='font-bold hover:text-[#B443FC] p-4' to=''>Read More</Link></div>
          <div className='flex items-center gap-4'>
           
          <Link className='font-bold hover:text-[#B443FC]' to=''>Share:</Link>
          <Link className='text-[30px] text-blue-800' to=''><FaFacebook /></Link>
          <Link className='text-[30px] text-blue-500' to=''><AiFillTwitterCircle /></Link>
          <Link className='text-[30px] text-pink-500' to=''><BiLogoInstagramAlt /></Link>
          </div>
        </div>
      </div>

      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white py-4">
      <img
        className="w-full h-48 object-cover img overflow-hidden"
        src={logo}
        alt="Sample"
      />
      <div className="p-6">
      <p className='flex gap-2 items-center'> 22 April, 2024 -4<FaComments /></p>
      <br />
        <h2 className="font-bold text-3xl mb-2">Ipsum blog post two</h2>
        <br />
        <p className="text-gray-700 text-2xl">
        Aenean sollicitudin, lorem quis on endum uctor nisi <br /> elitod the cona sequat ipsum, necas sagittis sem <br /> natoque nibh id penatibus
        </p>

      </div>
      <div className='flex justify-between items-center'>
          <div><Link className='font-bold hover:text-[#B443FC] p-4' to=''>Read More</Link></div>
          <div className='flex items-center gap-4'>
           
          <Link className='font-bold hover:text-[#B443FC]' to=''>Share:</Link>
          <Link className='text-[30px] text-blue-800' to=''><FaFacebook /></Link>
          <Link className='text-[30px] text-blue-500' to=''><AiFillTwitterCircle /></Link>
          <Link className='text-[30px] text-pink-500' to=''><BiLogoInstagramAlt /></Link>
          </div>
        </div>
      </div>


      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white py-4">
      <img
        className="w-full h-48 object-cover img overflow-hidden"
        src={logo}
        alt="Sample"
      />
      <div className="p-6">
      <p className='flex gap-2 items-center'> 22 April, 2024 -4<FaComments /></p>
      <br />
        <h2 className="font-bold text-3xl mb-2">Ipsum blog post two</h2>
        <br />
        <p className="text-gray-700 text-2xl">
        Aenean sollicitudin, lorem quis on endum uctor nisi <br /> elitod the cona sequat ipsum, necas sagittis sem <br /> natoque nibh id penatibus
        </p>

      </div>
      <div className='flex justify-between items-center p-4'>
          <div><Link className='font-bold hover:text-[#B443FC]' to=''>Read More</Link></div>
          <div className='flex items-center gap-4'>
           
          <Link className='font-bold hover:text-[#B443FC]' to=''>Share:</Link>
          <Link className='text-[30px] text-blue-800' to=''><FaFacebook /></Link>
          <Link className='text-[30px] text-blue-500' to=''><AiFillTwitterCircle /></Link>
          <Link className='text-[30px] text-pink-500' to=''><BiLogoInstagramAlt /></Link>
          </div>
        </div>
      </div>

      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white py-4">
      <img
        className="w-full h-48 object-cover img overflow-hidden"
        src={logo2}
        alt="Sample"
      />
      <div className="p-6">
      <p className='flex gap-2 items-center'> 22 April, 2024 -4<FaComments /></p>
      <br />
        <h2 className="font-bold text-3xl mb-2">Ipsum blog post two</h2>
        <br />
        <p className="text-gray-700 text-2xl">
        Aenean sollicitudin, lorem quis on endum uctor nisi <br /> elitod the cona sequat ipsum, necas sagittis sem <br /> natoque nibh id penatibus
        </p>

      </div>
      <div className='flex justify-between items-center p-4'>
          <div><Link className='font-bold hover:text-[#B443FC]' to=''>Read More</Link></div>
          <div className='flex items-center gap-4'>
           
          <Link className='font-bold hover:text-[#B443FC]' to=''>Share:</Link>
          <Link className='text-[30px] text-blue-800' to=''><FaFacebook /></Link>
          <Link className='text-[30px] text-blue-500' to=''><AiFillTwitterCircle /></Link>
          <Link className='text-[30px] text-pink-500' to=''><BiLogoInstagramAlt /></Link>
          </div>
        </div>
      </div>

      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white py-4">
      <img
        className="w-full h-48 object-cover img overflow-hidden"
        src={logo3}
        alt="Sample"
      />
      <div className="p-6">
      <p className='flex gap-2 items-center'> 22 April, 2024 -4<FaComments /></p>
      <br />
        <h2 className="font-bold text-3xl mb-2">Ipsum blog post two</h2>
        <br />
        <p className="text-gray-700 text-2xl">
        Aenean sollicitudin, lorem quis on endum uctor nisi <br /> elitod the cona sequat ipsum, necas sagittis sem <br /> natoque nibh id penatibus
        </p>

      </div>
      <div className='flex justify-between items-center p-4'>
          <div><Link className='font-bold hover:text-[#B443FC]' to=''>Read More</Link></div>
          <div className='flex items-center gap-4'>
           
          <Link className='font-bold hover:text-[#B443FC]' to=''>Share:</Link>
          <Link className='text-[30px] text-blue-800' to=''><FaFacebook /></Link>
          <Link className='text-[30px] text-blue-500' to=''><AiFillTwitterCircle /></Link>
          <Link className='text-[30px] text-pink-500' to=''><BiLogoInstagramAlt /></Link>
          </div>
        </div>
      </div>

      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white py-4">
      <img
        className="w-full h-48 object-cover img overflow-hidden"
        src={logo4}
        alt="Sample"
      />
      <div className="p-6">
      <p className='flex gap-2 items-center'> 22 April, 2024 -4<FaComments /></p>
      <br />
        <h2 className="font-bold text-3xl mb-2">Ipsum blog post two</h2>
        <br />
        <p className="text-gray-700 text-2xl">
        Aenean sollicitudin, lorem quis on endum uctor nisi <br /> elitod the cona sequat ipsum, necas sagittis sem <br /> natoque nibh id penatibus
        </p>

      </div>
      <div className='flex justify-between items-center'>
          <div><Link className='font-bold hover:text-[#B443FC] p-4' to=''>Read More</Link></div>
          <div className='flex items-center gap-4'>
           
          <Link className='font-bold hover:text-[#B443FC]' to=''>Share:</Link>
          <Link className='text-[30px] text-blue-800' to=''><FaFacebook /></Link>
          <Link className='text-[30px] text-blue-500' to=''><AiFillTwitterCircle /></Link>
          <Link className='text-[30px] text-pink-500' to=''><BiLogoInstagramAlt /></Link>
          </div>
        </div>
      </div>

      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white py-4">
      <img
        className="w-full h-48 object-cover img overflow-hidden"
        src={logo5}
        alt="Sample"
      />
      <div className="p-6">
      <p className='flex gap-2 items-center'> 22 April, 2024 -4<FaComments /></p>
      <br />
        <h2 className="font-bold text-3xl mb-2">Ipsum blog post two</h2>
        <br />
        <p className="text-gray-700 text-2xl">
        Aenean sollicitudin, lorem quis on endum uctor nisi <br /> elitod the cona sequat ipsum, necas sagittis sem <br /> natoque nibh id penatibus
        </p>

      </div>
      <div className='flex justify-between items-center'>
          <div><Link className='font-bold hover:text-[#B443FC] p-4' to=''>Read More</Link></div>
          <div className='flex items-center gap-4'>
           
          <Link className='font-bold hover:text-[#B443FC]' to=''>Share:</Link>
          <Link className='text-[30px] text-blue-800' to=''><FaFacebook /></Link>
          <Link className='text-[30px] text-blue-500' to=''><AiFillTwitterCircle /></Link>
          <Link className='text-[30px] text-pink-500' to=''><BiLogoInstagramAlt /></Link>
          </div>
        </div>
      </div>

      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white py-4">
      <img
        className="w-full h-48 object-cover img overflow-hidden"
        src={logo}
        alt="Sample"
      />
      <div className="p-6">
      <p className='flex gap-2 items-center'> 22 April, 2024 -4<FaComments /></p>
      <br />
        <h2 className="font-bold text-3xl mb-2">Ipsum blog post two</h2>
        <br />
        <p className="text-gray-700 text-2xl">
        Aenean sollicitudin, lorem quis on endum uctor nisi <br /> elitod the cona sequat ipsum, necas sagittis sem <br /> natoque nibh id penatibus
        </p>

      </div>
      <div className='flex justify-between items-center'>
          <div><Link className='font-bold hover:text-[#B443FC] p-4' to=''>Read More</Link></div>
          <div className='flex items-center gap-4'>
           
          <Link className='font-bold hover:text-[#B443FC]' to=''>Share:</Link>
          <Link className='text-[30px] text-blue-800' to=''><FaFacebook /></Link>
          <Link className='text-[30px] text-blue-500' to=''><AiFillTwitterCircle /></Link>
          <Link className='text-[30px] text-pink-500' to=''><BiLogoInstagramAlt /></Link>
          </div>
        </div>
      </div>



      
    </div>
    <div className="flex justify-center mt-4 mb-6">
      <button
        onClick={() => handlePageClick(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 border border-gray-300 rounded-l bg-white hover:bg-gray-100 "
      >
        Previous
      </button>
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index + 1}
          onClick={() => handlePageClick(index + 1)}
          className={`px-4 py-2 border border-gray-300 ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-white hover:bg-gray-100'} `}
        >
          {index + 1}
        </button>
      ))}
      <button
        onClick={() => handlePageClick(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 border border-gray-300 rounded-r bg-white hover:bg-gray-100 "
      >
        Next
      </button>
    </div>

    
    </div>
  )
}

export default Services
