import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './ProductListing.css';

const ProductListing = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);

  const plants = [
    { id: 1, name: 'Aloe Vera', price: 10, image: '/path/to/aloe.jpg' },
    { id: 2, name: 'Fiddle Leaf Fig', price: 25, image: '/path/to/fiddle.jpg' },
    { id: 3, name: 'Snake Plant', price: 15, image: '/path/to/snake.jpg' },
    { id: 4, name: 'Cactus', price: 5, image: '/path/to/cactus.jpg' },
    { id: 5, name: 'Spider Plant', price: 12, image: '/path/to/spider.jpg' },
    { id: 6, name: 'Peace Lily', price: 20, image: '/path/to/peace-lily.jpg' },
  ];

  const handleAddToCart = (plant) => {
    if (!cart.some(item => item.id === plant.id)) {
      dispatch({ type: 'ADD_TO_CART', payload: { ...plant, quantity: 1 } });
    }
  };

  return (
    <div className="product-listing">
      <h2>Our Plants</h2>
      <div className="products">
        {plants.map(plant => (
          <div key={plant.id} className="product-card">
            <img src={plant.image} alt={plant.name} />
            <h3>{plant.name}</h3>
            <p>${plant.price}</p>
            <button onClick={() => handleAddToCart(plant)} className="add-to-cart">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
