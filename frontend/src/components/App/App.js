import React, {useEffect, useState} from 'react'
import DIGITBiteService from "../../repository/digitBiteRepository";
import {Routes, Route} from 'react-router-dom'
import Home from '../../layout/Home';
import Menu from '../../layout/Menu';
import About from '../../layout/About'
import Contact from '../../layout/Contact';
import MenuMainContent from '../MenuMainContent';

const App = () => {

  const [menu, setMenu] = useState([])

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/menu' element={<Menu />}>
          <Route path='category/:categoryName' element={<MenuMainContent />}/>
        </Route>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/about-us' element={<About />}/>
      </Routes>
    </div>

  )
}




export default App