import React from 'react'
import Oven from './KitchenComponents/Oven';
import Sink from './KitchenComponents/Sink';


const Kitchen = () => {

    return (
      <div className='Kitchen'>
  
            <h2>Kitchen</h2>
            <Sink />
            <Oven />
  
      </div>
    )
  }
  
  
  export default Kitchen;