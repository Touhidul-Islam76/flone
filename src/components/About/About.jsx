import React from 'react'
import logo from '../../assets/about.png'
import './About.css'

const About = () => {
  return (
    <div className='bg-[#F4DFFE]'>
      <h1 className="font-bold italic text-5xl flex justify-center items-center p-6 bg-gray-800 text-white">
        ABOUT US
    </h1>
    <div className="w-full ">
    <svg className="bg-[#F4DFFE] w-full h-20" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path id="wavepath" d="M0,0  L110,0C35,150 35,0 0,100z" fill="#1B2937"></path>
        </svg>
    </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 w-[85%] mx-auto py-12'>
      <div >
        <div className='left'>
          <br />
          <h3 className='font-bold text-2xl'>Description:</h3>
          <br />
          <p className=' about-p'>Welcome to [Flone], where our passion for [industry or field] drives us to deliver exceptional products and services that enhance the lives of our customers. Established in [1997], we have grown from a small startup into a trusted name in the industry, thanks to our unwavering commitment to quality, innovation, and customer satisfaction.

            At [Flone], our journey began with a simple idea: to create [specific product or service] that meets the needs of our community. With a team of dedicated professionals who share a common vision, we have worked tirelessly to bring that idea to life. Our founders, [DIPTI], believed in the power of [core values or principles], and their vision remains at the heart of everything we do.
            
            Over the years, we have expanded our offerings to include [list some products or services], each designed with the highest standards in mind. Our research and development team is constantly exploring new technologies and methods to improve our products and ensure that we stay ahead of industry trends. We believe in continuous improvement, and that commitment drives us to push boundaries and set new benchmarks.
            
            What truly sets us apart is our dedication to our customers. We strive to foster meaningful relationships and provide personalized support, ensuring that each interaction leaves a lasting positive impression. Our customer service team is always ready to assist, whether you have a question about our products, need assistance with an order, or simply want to share your feedback. We value your input, as it helps us grow and better serve you.
            
            Sustainability and ethical practices are also central to our mission. We recognize the importance of protecting our planet and are committed to minimizing our environmental footprint. From sourcing materials responsibly to implementing eco-friendly production methods, we take every step to ensure that our operations contribute to a healthier world.
            
            As we look to the future, we remain excited about the possibilities that lie ahead. We are continually evolving, driven by our desire to innovate and provide value to our customers. Whether you’re a long-time supporter or a new visitor, we invite you to join us on this journey. Together, we can create a brighter, more sustainable future.
            
            Thank you for taking the time to learn about us. We invite you to explore our website, discover our products, and connect with us on social media. Your journey with [Flone] is just beginning, and we can’t wait to share it with you.</p>
        </div>
      </div>
      <div className='right flex justify-center items-center'>
        <img src={logo} alt="" />
      </div>
      </div>
    </div>
  )
}

export default About
