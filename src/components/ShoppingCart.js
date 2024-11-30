import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './ShoppingCart.css';

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);

  const handleIncrease = (plant) => {
    dispatch({ type: 'INCREASE_QUANTITY', payload: plant });
  };

  const handleDecrease = (plant) => {
    dispatch({ type: 'DECREASE_QUANTITY', payload: plant });
  };

  const handleRemove = (plant) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: plant });
  };

  const totalCost = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="shopping-cart">
      <h2>Your Cart</h2>
      <div className="cart-items">
        {cart.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <h3>{item.name}</h3>
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <div className="cart-item-actions">
                <button onClick={() => handleIncrease(item)}>+</button>
                <button onClick={() => handleDecrease(item)}>-</button>
                <button onClick={() => handleRemove(item)}>Remove</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <p>Total Items: {totalItems}</p>
        <p>Total Cost: ${totalCost}</p>
        <button className="checkout">Checkout (Coming Soon)</button>
      </div>
    </div>
  );
};

export default ShoppingCart;
