import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';
import Rating from '@material-ui/lab/Rating'

const CheckoutProduct = ({id, title, rating, price, image})=>{
    const [{cart}, dispatch] = useStateValue();

    const removeFromCart= ()=>{
        dispatch({
            type: 'remove_from_cart',
            id: id
        })
};

    return (
        <div className='checkoutProduct'>
        <img className='checkoutProduct__image' src={image} alt='' />
        <div className='checkoutProduct__info'>
        <p className='checkoutProduct__title'>{title}</p>
        <p className='product__price'>
        <small>$</small>
        <strong>{price}</strong>
        </p>
        <div className='checkoutProduct__rating'>
         {<Rating name="half-rating-read" defaultValue={rating} precision={0.5} readOnly />
         }
        </div>
        <button onClick={removeFromCart}>Remove from cart</button>
        </div>
        </div>
    )
}

export default CheckoutProduct;