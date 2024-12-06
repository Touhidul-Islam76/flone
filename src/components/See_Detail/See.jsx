import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';


const See = () => {
    const [detail, setDetail ] = useState([])

    const {id} = useParams()
    const {title, description, image, price} = detail || {}

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then(res => setDetail(res.data))
        .catch(err => console.log(err))
    }, [id])
  return (
    <div className='flex justify-center items-center'>
        <div className='see-wrapper'>
      <div className=' see w-[70%] h-[100%] mx-auto border-2 border-gray-300 shadow-[0_0_40px_0_gray]  p-6'>
        <div className='flex items-center justify-center'><img className='w-[400px] h-[300px]' src={image} alt={title} /></div>
       <div className='text-center'>
       <h1 className='font-bold text-3xl'>{title}</h1>
       <br />
        <p>{description}</p>
        <p>{price}</p>
       </div>
      </div>
    </div>
    </div>
  )
}

export default See
