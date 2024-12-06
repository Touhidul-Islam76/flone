import React from 'react'
import logo from '../../assets/Footer-logo.png'

const Footer = () => {
  return (
    
    
    <div className='footer bg-gray-200'>
        <div className='mt-[8%] mx-auto py-[8%]' >
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 w-[85%] gap-4 mx-auto'>
        <div className='footer-image flex justify-center items-center'>
            <img className='w-[35%]' src={logo} alt="" />
        </div>
        <div className='product font-bold mb-2 md:mb-0 lg:mb-0'>
            <h1 className='font-bold text-2xl '>PRODUCTS</h1>
            <br />
            <h3>Jewelary</h3>
            <h3>Electronics</h3>
            <h3>Men's clothing</h3>
            <h3>Women's clothing</h3>
            
        </div>
        <div className='address mb-2 md:mb-0 lg:mb-0'>
        <div>
        <h1 className='font-bold text-2xl'>ADDRESS</h1>
        <br />
         <span className='font-bold'> Street:</span>  62, purana paltan (2nd floor), 1000

        </div>

        <div>
         <span className='font-bold'> City:</span>  Dhaka

        </div>

        <div>
         <span className='font-bold'> State/province/area:</span> Dhaka

        </div>
        </div>
        <div className='contact mb-2 md:mb-0 lg:mb-0'>
        <div>
        <h1 className='font-bold text-2xl'> CONTACT</h1>
        <br />
         <span className='font-bold'> Phone number:</span>  02 9564226

        </div>

        <div>
         <span className='font-bold'> Country calling code:</span> +880

        </div>
        </div>
      </div>
    </div>
    
        <marquee behavior="" className='text-white font-bold bg-gray-800' direction=" left">Design by Touhid © 2024 Qode Interactive, All Rights Reserved | Privacy Policy | Contact Us | Terms and Conditions</marquee>
    
    </div>
    
  )
}

export default Footer
