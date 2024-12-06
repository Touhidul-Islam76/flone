import React from 'react'
import '../Single_item/Single.css'
import { GrFavorite } from "react-icons/gr";
import { IoMdEye } from "react-icons/io";
import { Link } from 'react-router-dom';

const Single = ({item}) => {
    const {image,title,price, rating}= item ||{}
  return (
    <div>
      <div className='flex flex-col border-2 border-gray-200 single overflow-hidden single relative'>
        <div className='w-full  align-items-center justify-center'>
        <img src={image} alt={title} className='h-[250px] w-[ 100px]  mx-auto mt- mb-2' />
        </div>
        <div className='flex justify-between items-center bg-[#B443FC] p-2 text-white info'>
        
        <Link className='' to=''><GrFavorite className=''/></Link>
        <div><Link className='' to={`/product/${item.id}`}>See Detail</Link></div>
        <Link className='' to=''><IoMdEye /></Link>
        

        </div>
        
      </div>
      <div className='text-center'>
            <h3 className='h-[96px] md:]h-[72px] hover:text-[#B443FC]'>{title}</h3>
            <h4>{rating.rate}</h4>
            <h4>${price}</h4>
        </div>
    </div>
  )
}

export default Single
