import React from 'react'; 
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider'
import { getCartTotal } from './reducer';

const Subtotal = ()=>{
    const [{cart},dispatch] = useStateValue();
    return (<div className='subtotal' >
        <CurrencyFormat 
        renderText = {(value)=>(
            <>
            <p>
                Subtotal ({cart.length} items): <strong>{'some text'}</strong>
            </p>
            <small className='subtotal__gift'><input type='checkbox' />This order contains a gift</small>
            </>
        )}

        decimalScale={2}
        value={getCartTotal(cart)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
        />

        <button>Proceeed to checkout</button>
    </div>);
};

export default Subtotal;
