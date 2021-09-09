import React from 'react'
import Oven from './KitchenComponents/Oven';
import Sink from './KitchenComponents/Sink';


const Kitchen = () => {

    return (
      <div className='Kitchen'>
  
            <Sink />
            <Oven />
            <h2>Kitchen</h2>
  
      </div>
    )
  }
  
  
  export default Kitchen;