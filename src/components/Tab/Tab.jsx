import React, { useEffect, useState } from 'react'
import '../Tab/Tab.css'
import Single from '../Single_item/Single';

const Tab = () => {
    const[jwelery,setJewelry]=useState([]);
    const[electronics,setElectronics]=useState([]);
    const[men,setMen]=useState([]);
    const[women,setWomen]=useState([]);


    useEffect(() => {
        fetch('https://fakestoreapi.com/products/category/jewelery')
            .then(res=>res.json())
            .then(json=>setJewelry(json))


        fetch('https://fakestoreapi.com/products/category/electronics')
             .then(res=>res.json())
             .then(json=>setElectronics(json))

        fetch("https://fakestoreapi.com/products/category/men's%20clothing")
        .then(res=>res.json())
        .then(json=>setMen(json))

        fetch("https://fakestoreapi.com/products/category/women's%20clothing")
        .then(res=>res.json())
        .then(json=>setWomen(json))
    }, [])
    const [activeTab, setActiveTab]=useState('jwelery');
    const tabhandler=(activeTab)=>{
      setActiveTab(activeTab)
      
    }
  return (
    <div>
      <div className=''>
      
        <h1 className='font-bold text-4xl text-center p-6'>DAILY DEALS!</h1>
        
      </div>
      <div className='tab-wrapper'>
        <div className='tab-btn flex gap-6 justify-center mb-[40px]'>
        <div><button className={`p-2 md:p-4 text-[12px] md:text-[28px] transition duration-300 ease-in ${activeTab==='jwelery'? 'active': ''}`} onClick={()=>tabhandler('jwelery')}>Jewellery</button></div>
        <div><button className={`p-2 md:p-4 text-[12px] md:text-[28px] transition duration-300 ease-in ${activeTab==='electronics'? 'active': ''}`} onClick={()=>tabhandler('electronics')}>Electronics</button></div>
        <div><button className={`p-2 md:p-4 text-[12px] md:text-[28px] transition duration-300 ease-in ${activeTab==='men'? 'active': ''}`} onClick={()=>tabhandler('men')}>Men's Clothing</button></div>
        <div><button className={`p-2 md:p-4 text-[12px] md:text-[28px] transition duration-300 ease-in ${activeTab==='women'? 'active': ''}`} onClick={()=>tabhandler('women')}>Women's Clothing</button></div>
        </div>
      </div>

      <div className='tab-content'>
      {activeTab== 'jwelery' &&
      <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-3 w-[75%] mx-auto tab-info'>
      {
          jwelery.map((item,index)=><Single key={index} item={item}></Single>)
      }
    </div>
      

      }
      {
        activeTab == 'electronics' &&
        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-3 w-[75%] mx-auto tab-info '>
        {
            electronics.map((item,index)=><Single key={index} item={item}></Single>)
        }
      </div>
      }
      {
        activeTab == 'men' &&
        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-3 w-[75%] mx-auto tab-info '>
        {
            men.map((item,index)=><Single key={index} item={item}></Single>)
        }
      </div>
      }
      {
        activeTab == 'women' &&
        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 w-[75%] mx-auto tab-info '>
        {
            women.map((item,index)=><Single key={index} item={item}></Single>)
        }
      </div>
      }
      </div>

    </div>
  )
}

export default Tab
