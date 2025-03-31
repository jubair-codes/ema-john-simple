import React, { useState } from 'react';
import fakeData from '../../fakeData/products.JSON';

const Shop = () => {
    console.log(fakeData);
    const products = fakeData.slice(0,10);
    // const [products, setProducts] = useState(first10.length);
    return (
        <div>
            <h1>This is shop.</h1>
            <h4>{products.length}</h4>
            <ul>
                {
                    products.map(product => <li>{product.name}</li>)
                }
            </ul>
        </div>
    );
};

export default Shop;