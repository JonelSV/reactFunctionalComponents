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
          <BedRoom1 bedNum1={1} />
          <BedRoom2 bedNum2={2}/>
          <BedRoom3 bedNum3={3}/>
          <Bath1 size1={'Full Bath'}/>
          <Bath2 size2={'Half Bath'}/>
          <LivingRoom />
          <Kitchen />
        </div>
    )
  }
  
  
  export default FloorPlan;