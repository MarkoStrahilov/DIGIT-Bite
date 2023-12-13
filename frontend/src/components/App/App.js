import React, {useEffect, useState} from 'react'
import DIGITBiteService from "../../repository/digitBiteRepository";
import {Routes, Route} from 'react-router-dom'
import Home from '../../layout/Home';
import Menu from '../../layout/Menu';
import About from '../../layout/About'
import Contact from '../../layout/Contact';
import SignIn from "../Auth/SignIn";
import SignUp from "../Auth/SignUp";
// import Drawer from '../../layout/Drawer';

const App = () => {

    const [menu, setMenu] = useState([])

    // const [categories, setCategories] = useState([])

    // //todo change name
    // useEffect(() => {
    //   DIGITBiteService.fetchCategories()
    //     .then((data) => {
    //       // console.log
    //       setCategories(data.data.categories)
    //     })
    // }, [])

    // useEffect(() => {
    //     fetch("https://www.themealdb.com/api/json/v1/1/categories.php").then(res => res.json().then(data => setCategories(data.categories), "-------------------"))
    //
    //      // fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood").then(res => res.json().then(data => console.log(data), "-------------------"))
    // }, [])
    //             {categories?.map(category => {
    //return  <p key={category.idCategory}>{category.strCategory}</p>
    //})}
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/menu' element={<Menu />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/about-us' element={<About />}/>
          <Route path='/login' element={<SignIn/>}/>
          <Route path='/register' element={<SignUp/>}/>
      </Routes>
    </div>

  )
}




export default App