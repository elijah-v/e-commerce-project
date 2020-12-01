import React from 'react';
import { useStateValue } from './StateProvider';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

const Checkout = ()=>{
    const [{cart}]= useStateValue();

    return (
        <div className='checkout'>
        <div className='checkout__left'> 
        <img className='checkout__ad' src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg' alt=''/>
        {cart.length === 0 ? (
        <div>        
            <h1>Your cart is empty</h1>
        </div>): (
        <div className='checkout__title'><h1>Your cart</h1></div>)}
        <div>{cart.map(item=><CheckoutProduct
        id={item.id}
        title={item.title}
        rating={item.rating}
        price={item.price}
        image={item.image}
        />)}</div>
        </div>
        { cart.length > 0 && (
        <div className='checkout__right'>
            <Subtotal />
        </div>)}
        </div>
    )
};

export default Checkout;
 