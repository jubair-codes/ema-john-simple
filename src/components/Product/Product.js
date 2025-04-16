import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const { name, img, seller, price, stock, id } = props.info;

    return (
        <div className='product'>
            <div>
                <img src={img} alt="" className='product-image' />
            </div>
            <div>
                <h2><Link to={"/product/"+id}>{name}</Link></h2>
                <h4>By {seller}</h4>
                <h3>${price}</h3>
                <h4>Only {stock} available in stock.</h4>
                {props.showAddToCart && <button 
                    className='product-btn' 
                    onClick={() => {props.productAddHandler(props.info)}}>
                <FontAwesomeIcon icon={faCartShopping} />
                    Add to cart
                </button>}
            </div>

        </div>
    );
};

export default Product;