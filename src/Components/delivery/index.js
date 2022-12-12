import React from 'react'
import Filters from '../common/filters'
import "./delivery.css"
import "./delivery.css"
import DeliveryCollection from './deliveryCollections'


const deliveryFilters = [
  {
      id: 1,
      title: "Filters",
  },
  {
      id: 2,
      title: "Rating: 4.0+",
  },
  {
      id: 3,
      title: "Safe and hygienic",
  },
  {
      id: 4,
      title: "pure vag",
  },
  {
      id: 5,
      title: "Delivery Time",
  },
  {
      id: 6,
      title: "Great offers",
  },
]
const Delivery = () => {
  return (
    <div>
      <div className='max-width'>
      <Filters filtersList={deliveryFilters}/>
      </div>
      <DeliveryCollection/>
    </div>
  )
}

export default Delivery