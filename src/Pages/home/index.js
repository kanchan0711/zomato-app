import React, { useState } from 'react'
import Footer from '../../Components/common/footer'
import Header from '../../Components/common/header'
import TabOptions from '../../Components/common/tabOption'
import Delivery from '../../Components/delivery'
import DiningOut from '../../Components/diningOut'
import NightLife from '../../Components/nightlife'

const HomePage = () => {

  const [activeTab, setActiveTab]= useState("Delivery")

  return (
    <div>
        <Header/>
        <TabOptions activeTab={activeTab} setActiveTab={setActiveTab}/>
        {getCorrectScreen(activeTab)}
        <Footer/>
    </div>
  )
}

const getCorrectScreen=(tab)=>{
    switch(tab){
        case "Delivery":
            return <Delivery />
        case "Dining Out":
            return <DiningOut />
        case "Nightlife":
            return <NightLife />
        default:
            return <Delivery />
    }
}

export default HomePage;