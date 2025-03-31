import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    const { name, img, seller, price, stock } = props.info;

    return (
        <div className='product'>
            <div>
                <img src={img} alt="" className='product-image' />
            </div>
            <div>
                <h2>{name}</h2>
                <h4>By {seller}</h4>
                <h3>${price}</h3>
                <h4>Only {stock} available in stock.</h4>
                <button 
                    className='product-btn' 
                    onClick={() => {props.productAddHandler(props.info)}}>
                <FontAwesomeIcon icon={faCartShopping} />
                    Add to cart
                </button>
            </div>

        </div>
    );
};

export default Product;