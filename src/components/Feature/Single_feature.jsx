import React from 'react'

const Single_feature = ({item}) => {
    const{img,title,description}=item ||{}
  return (
    <div className='flex items-center justify-center gap-3 mb-4 mt-6 md:mb-0 lg:mb-0'>
      <div><img src={img} alt={title} /></div>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default Single_feature
