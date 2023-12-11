import React, {useEffect, useState} from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import DIGITBiteService from "../../repository/digitBiteRepository";

const App = () => {

    const [menu,setMenu] = useState([])

    useEffect(() => {
        DIGITBiteService.fetchProducts()
            .then((data) => {
                console.log(data.data)
            })
    })

  return (
    <Tabs>
      <TabList>
        <Tab>One</Tab>
        <Tab>Two</Tab>
        <Tab>Three</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <p>one!</p>
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