import React, {useEffect, useState} from 'react'
import DIGITBiteService from "../../repository/digitBiteRepository";
import {Routes, Route} from 'react-router-dom'
import Home from '../../layout/Home';
import Menu from '../../layout/Menu';
import About from '../../layout/About'
import Contact from '../../layout/Contact';
import SignIn from "../Auth/SignIn";
import SignUp from "../Auth/SignUp";
import MenuMainContent from '../MenuMainContent';
// import Drawer from '../../layout/Drawer';
import PageNotFound from '../../layout/PageNotFound'

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
                <Route path='/login' element={<SignIn/>}/>
                <Route path='/register' element={<SignUp/>}/>
                <Route path='/*' element={<PageNotFound/>}/>

            </Routes>
        </div>

    )
}




export default App