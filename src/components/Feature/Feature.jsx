import React, { useEffect, useState } from 'react'
import Single_feature from './Single_feature';

const Feature = () => {
    const[Feature,setFeature]=useState([]);

    useEffect(() => {
        fetch('feature.json')
            .then(res=>res.json())
            .then(json=>setFeature(json))
    }, [])
  return (
    <div className='grid grid-cols-1 mb-4 md:grid-cols-3 lg:grid-cols-4'>
      {
        Feature.map(item=> <Single_feature key={item.id} item={item}></Single_feature>)
      }
    </div>
  )
}

export default Feature
