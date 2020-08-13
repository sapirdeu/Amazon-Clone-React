import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';

function CheckoutProduct({id, title, image, price, rating}) {
    const [{}, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id
        });
    };

    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} alt=""/>

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>

                <p className="checkoutProduc__price">
                    <strong>£</strong>
                    <strong>{price}</strong>
                </p>

                <div className="checkoutProduc__rating">
                    {Array(rating)
                        .fill()
                        .map((_) => (
                            <span role="img" aria-label="star">&#11088;</span>
                    ))}
                </div>

                <button onClick={removeFromBasket}>Remove from basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
