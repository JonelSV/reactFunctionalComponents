import React, { useState } from 'react' 
import './App.css'
import FloorPlan from './components/FloorPlan';



const App = () => {

  const [beNum, setBednum] = useState(0)


  return (
    <div>
        <div>
          <FloorPlan />
          
        </div>


    </div>
  )
}


export default App;