import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import '../Contact/Contact.css'
import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { Link } from 'react-router-dom';

const Contact = () => {
  
  const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345095847!2d144.9537363153197!3d-37.81720997975158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11d7f3%3A0x5045675218cedb0!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1616583036333!5m2!1sen!2sau";
  
  return (
    <div>
      <div className=''>
      
      <div className="flex justify-center items-center min-h-screen">
      <iframe
      
        src={mapSrc}
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        title="Google Map"
      ></iframe>
    </div>
    </div >
    <div className='location absolute top-[50%] right-[0%] bottom-[0%] left-[48%] text-[50px] font-bold text-red-900'><CiLocationOn /></div>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 w-[85%] mx-auto mb-6'>
    <div className='bg-gray-400 flex justify-center items-center'>
    <div className='contact flex flex-col gap-4 p-8 justify-center items-left'>
      <div className='flex gap-4 items-center'>
      <div>
        <Link className='text-4xl' to=''><FaPhoneSquareAlt /></Link>
      </div>
     <div>
     <div>+012 345 678 102</div>
     <div>+012 345 678 102</div>
     </div>
      </div>

      <div className='flex gap-4 items-center'>
      <div>
        <Link className='text-4xl' to=''><MdEmail /></Link>
      </div>
     <div>
     <div>yourname@email.com</div>
     <div>yourwebsite.com</div>
     </div>
      </div>

      <div className='flex gap-4 items-center'>
      <div>
        <Link className='text-4xl' to=''><FaLocationDot /></Link>
      </div>
     <div>
     <div>Address goes here,</div>
     <div>street, Crossroad 123.</div>
     </div>
      </div>

      <div className='flex gap-4 items-center'>
      <div>
        <Link className='text-4xl' to=''><FaPhoneSquareAlt /></Link>
      </div>
     <div>
     <div>+012 345 678 102</div>
     <div>+012 345 678 102</div>
     </div>
      </div>
      <br />

      <div className='flex flex-col gap-4 items-center'>
      <div>
        <Link className='text-4xl' to=''>FOLLOW US</Link>
      </div>
     <div className='flex gap-4 text-4xl'>
     <Link to=''><FaFacebook /></Link>
     <Link to=''><AiFillTwitterCircle /></Link>
     <Link to=''><BiLogoInstagramAlt /></Link>
     
     </div>
      </div>
    </div>
    </div>

    <div className='bg-gray-400 flex justify-center items-center p-6'>
    <div className='w-full justify-center items-center'>
      <h1 className='text-center font-bold text-5xl'>GET IN TOUCH</h1>
      <br />
      <div className='flex justify-center items-center gap-4'>
      <input type="text" placeholder='Name' className="input  w-[38%]  h-[38px] border-2 border-gray-500" />
      <input type="email" placeholder='Email' className="input  w-[38%]  h-[38px] border-2 border-gray-500" />
      </div>
      <br />
      <div className='flex justify-center items-center'><input type="text" placeholder='Subject' className=" input  w-[79%]  h-[38px] border-2 border-gray-500" /></div>
      <br />
      <div className='flex justify-center items-center'>
      <button className='bg-gray-600 font-bold rounded-[7px] transition:all duration-300 ease-in-out hover:text-white hover:bg-gray-800 p-2 w-[30%] md:w-[32%] '>SUBMIT</button>
      </div>
    </div>
    </div>
    </div>
    </div> 
    
    
  )
}

export default Contact
