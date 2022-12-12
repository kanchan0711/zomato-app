 import React from 'react'
 import "./header.css"

 const Header = () => {
   return (
     <div className='max-width'>
         <div className='header-right'>
         < img src='https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png'
         alt='Zomato-logo'
         className='header-logo'
         />
          <div className='header-location-search-container'>
            <div className='location-wrapper'>
              <div className='location-icon-name'>
              <i class="fa-light fa-location-dot"></i>

                {/* <i className=' absolute-center location icon'></i> */}
 {/* location icon missing */}   
                <div>Delhi</div>
               </div>
               {/* caret icon missing */}
             </div>
             <div className='location-search-separator'></div>
             <div className='header-searchbar'>
              {/* search icon */}
              <input
               placeholder='Search for restaurant, cuisine or a dish' 
               className='search-input'
               />
             </div>
           </div>
           <div className='profile-wrapper'>
            <img src='	https://b.zmtcdn.com/web/assets/2267aec184e096c98c…fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A'
            alt=' '
            className='header-profile-image'
            />
            <span className='header-username'>Kanchan</span>
            {/* profile down icon */}
           </div>
         </div>
    </div>
   )
 }

 export default Header   