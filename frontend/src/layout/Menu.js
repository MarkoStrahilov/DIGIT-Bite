import React, {useEffect, useState} from 'react'
import DIGITBiteService from "../repository/digitBiteRepository";
import Navbar from '../components/Navbar'

const Menu = () => {

  const [categories, setCategories] = useState([])

  useEffect(() => {
    DIGITBiteService.fetchCategories()
        .then((data) => {
          setCategories(data.data.categories)
        })
  }, [])



  useEffect(() => {
      DIGITBiteService.fetchItemsByCategory()
          .then((data) => {
              console.log(data.data.meals);

          })
  })

  return (
    <div>
      <Navbar/>
      <div>
        <h2>Menu</h2>
      </div>
      <div>
        <div>
          {categories.map(category => {
            return (
                <p key={category.idCategory}>{category.strCategory}</p>
            );
          })}
        </div>
      </div>
    </div>

  )
}

export default Menu