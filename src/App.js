import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Dayone from './components/Dayone';
import Daytwo from './components/Daytwo';
import Daythree from './components/Daythree';
import Dayfour from './components/Dayfour';
import Dayfive from './components/Dayfive';
import Daysix from './components/Daysix';
import Home from './components/Home'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
            <Route path="/" element={<Home/>} >
              <Route index element={<Dayone/>} />
              <Route path='/Dayone' element={<Dayone/>} />
              <Route path='/Daytwo' element={<Daytwo/>} />
              <Route path='/Daythree' element={<Daythree/>} />
              <Route path='/Dayfour' element={<Dayfour/>} />
              <Route path='/Dayfive' element={<Dayfive/>} />
              <Route path='/Daysix' element={<Daysix/>} />
            </Route>
          
      </Routes>
    </BrowserRouter>
  )
}

export default App