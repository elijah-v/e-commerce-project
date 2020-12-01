import React from 'react';
import './Home.css';
import Product from './Product';

function Home(){
    return (
    <div className='home'>
        <img className='home__image' src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/gateway/placement/launch/1917/EVREF_OCT20_GWBleedingHero_ENG_XSite_1500X600_PV_en-GB._CB419087828_.jpg' alt='' />
      <div className='home__row'>  
      <Product 
        id='13256409'
        title='Life Extension One-Per-Day Tablets, 60 tabs 0737870231363'
        price={24}
        rating={4}
        image='https://images-na.ssl-images-amazon.com/images/I/51ZVkJ5f-NL._AC_SY879_.jpg'
      />
    
    <Product 
        id='13256409'
        title='Life Extension One-Per-Day Tablets, 60 tabs 0737870231363'
        price={24}
        rating={4}
        image='https://images-na.ssl-images-amazon.com/images/I/51ZVkJ5f-NL._AC_SY879_.jpg'
      />
    </div>  
    </div>   
)   
};

export default Home;