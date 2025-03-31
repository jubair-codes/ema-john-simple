import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    return (
        <div>
            <h3>This is cart.</h3>
            <p>Items Ordered: {cart.length}</p>
        </div>
    );
};

export default Cart;