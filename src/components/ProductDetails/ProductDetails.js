import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../../fakeData/products.json';
import Product from '../Product/Product';

const ProductDetails = (props) => {
    const {productId} = useParams();
    const product = data.find(pd => pd.id === productId);

    return (
        <div>
            <Product
                info={product}
                showAddToCart={false}
            />
        </div>
    );
};

export default ProductDetails;