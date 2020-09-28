

import React from 'react';
import './CheckoutProduct.css';
import {useStateValue} from './StateProvider';

function CheckoutProduct({id,title,price,rating,image}) {

    const [{},dispatch] = useStateValue();

    const removeFromBasket = () =>{
        //remove item from basket
       dispatch({
           type: "REMOVE_ITEM_FROM_BASKET",
           id:id,
           
       });

    };
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} alt=""/>

            <div className="checkoutProduct__info">
    <p className="checkoutProduct__title">{title}</p>

    <p className="checkoutProduct_price">
                <small>$</small>
               <strong>{price}</strong>
            </p>

            <div className="checkoutProduct__rating">

{
    Array(rating)
    .fill()
    .map((_) => (
        <p>
        ⭐
    </p>
    ))
}

</div>

<button onClick={removeFromBasket}>Remove from basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct

