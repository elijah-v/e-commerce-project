import React from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';
import Rating from '@material-ui/lab/Rating'

function Product({id, title, price, rating, image}){
    const [{cart}, dispatch] = useStateValue();
    function addToCart(){
    dispatch({
        type: 'add_to_cart',
        item: {
            id,
            title,
            price,
            rating,
            image
        }
    });
    };
    return (
        <div className='product'>
        <div className='product__info'>
        <p>{title}</p>
        <p className='product__price'>
        <small>$</small>
        <strong>{price}</strong>
        </p>
        <div className='product__rating'>
         {<Rating name="half-rating-read" defaultValue={rating} precision={0.5} readOnly />
         }
        </div>
        </div>
        <img src={image} alt='cart'/>
        <button onClick={addToCart}>Add to cart</button>
        </div>    
    )
};

export default Product;