import React from 'react'
import NextArrow from '../../common/carousal/nextArrow';
import PrevArrow from '../../common/carousal/prevArrow';
import "./deliveryCollection.css";
import Slider from "react-slick";
import DeliveryItem from './deliveryItem';

const deliveryItem=[
    {
        id:1,
        title: "Pizza",
        cover: "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
    },
    {
        id: 2,
        title: "chaat",
        cover: "https://b.zmtcdn.com/data/dish_images/1437bc204cb5c892cb22d78b4347f4651634827140.png",
    },
    {
        id: 3,
        title: "Sandwich",
        cover: "https://b.zmtcdn.com/data/o2_assets/fc641efbb73b10484257f295ef0b9b981634401116.png",
    }, 
    {
        id: 4,
        title: "Dosa",
        cover: "https://b.zmtcdn.com/data/o2_assets/8dc39742916ddc369ebeb91928391b931632716660.png",
    }, {
        id: 5,
        title: "Vada",
        cover: "https://b.zmtcdn.com/data/o2_assets/bf4bde7b78d517ac8460ea03d4c64a7f1632716550.png",
    }, {
        id: 6,
        title: "Rolls",
        cover: "https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png",
    }, {
        id: 7,
        title: "Idli",
        cover: "https://b.zmtcdn.com/data/dish_images/d9766dd91cd75416f4f65cf286ca84331634805483.png",
    }, {
        id: 8,
        title: "Burger",
        cover: "https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png",
    }, {
        id: 9,
        title: "Poha",
        cover: "https://b.zmtcdn.com/data/o2_assets/1ab6211f526df5d920d41787907d1a051632716576.png",
    }, {
        id: 10,
        title: "Cake",
        cover: "https://b.zmtcdn.com/data/dish_images/d5ab931c8c239271de45e1c159af94311634805744.png",
    }, 
]

const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,

  };

const DeliveryCollection = () => { 
  return (
    <div className='delivery-collection'>
        <div className='delivery-item-background'>
        <div className='max-width'>
        <div className='collection-title'>Inspiration for your first order</div>
        <Slider {...settings}>
            {deliveryItem.map((item) => {
                return <DeliveryItem item ={item} />;
            })}
        </Slider>
        </div>
      </div>
     </div>
  )
}

export default DeliveryCollection
