import React from 'react'
import './tabOption.css'

const tabs=[
  {
    id:1,
    name:"delivery",
    active_img:"https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png",
    backdrop:"#FCEEC0",
    inactive_img:"https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png",
  },
  {
    id:1,
    name:"Dining Out",
    active_img:"https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png",
    backdrop:"#E5F3F3",
    inactive_img:"https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png",
  },
  {
    id:1,
    name:"NightLife",
    active_img:"https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png",
    backdrop:"#ECf4FF",
    inactive_img:"https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png",
  },
]

const TabOptions = ({ activeTab, setActiveTab}) => {
  return (
    <div className='tap-option'>
      <div className='max-width option-wrapper'>
        {tabs.map((tab) => {
          return(
             <div onClick={() => setActiveTab(tab.name)}
          className={ `tab-item absolute-center cur-po ${
            activeTab === tab.name &&"active-tab"
          }`}>
            <div className='tab-image-container absolute-center'
            style={{backgroundColor: `${activeTab ===tab.name?tab.backdrop: ""
            }`}}>
               <img className='tab-image'
              alt={tab.name} 
              src={
                 activeTab===tab.name ? tab.active_img:tab.inactive_img
                 }/>
            </div>
            <div className='tab-name'>{tab.name}</div>
          </div>
        );
        })}
      </div>
    </div>
  )
}

export default TabOptions