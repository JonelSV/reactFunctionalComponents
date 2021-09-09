import React from 'react' 
import './App.css'
import FloorPlan from './components/FloorPlan';
import BedRoom1 from './components/BedRoom1'
import BedRoom2 from './components/BedRoom2'
import BedRoom3 from './components/BedRoom3'
import Bath1 from './components/Bath1';
import Bath2 from './components/Bath2';
import LivingRoom from './components/LivingRoom';
import Kitchen from './components/Kitchen';



const App = () => {

  


  return (
  
    <div className='container'>

          <FloorPlan />
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


export default App;