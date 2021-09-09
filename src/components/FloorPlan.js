import React from 'react'
import BedRoom1 from './BedRoom1'
import BedRoom2 from './BedRoom2'
import BedRoom3 from './BedRoom3'
import Bath1 from './Bath1';
import Bath2 from './Bath2';
import LivingRoom from './LivingRoom';
import Kitchen from './Kitchen';


const FloorPlan = () => {
    
    return (
      <div className='container'>
          <BedRoom1 />
          <BedRoom2 />
          <BedRoom3 />
          <Bath1 />
          <Bath2 />
          <LivingRoom />
          <Kitchen />
  
  
      </div>
    )
  }
  
  
  export default FloorPlan;