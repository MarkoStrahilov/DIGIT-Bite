import React, {useEffect, useState} from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import DIGITBiteService from "../../repository/digitBiteRepository";

const App = () => {

    const [menu,setMenu] = useState([])

    const [categories,setCategories] = useState([])

    //todo change name
    useEffect(() => {
        DIGITBiteService.fetchProducts()
            .then((data) => {
                // console.log
                setCategories(data.data.categories)
            })
    }, [])

    // useEffect(() => {
    //     fetch("https://www.themealdb.com/api/json/v1/1/categories.php").then(res => res.json().then(data => setCategories(data.categories), "-------------------"))
    //
    //      // fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood").then(res => res.json().then(data => console.log(data), "-------------------"))
    // }, [])


    console.log(categories, "kategorii")

  return (
    <Tabs>
      <TabList>
        <Tab>One</Tab>
        <Tab>Two</Tab>
        <Tab>Three</Tab>
      </TabList>



      <TabPanels>
        <TabPanel>
            {categories?.map(category => {
              return  <p key={category.idCategory}>{category.strCategory}</p>
            })}
        </TabPanel>
        <TabPanel>
          <p>two!</p>
        </TabPanel>
        <TabPanel>
          <p>three!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}

export default App