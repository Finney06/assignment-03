import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import ProductDetail from './components/ProductDetail';
import Gallery from './components/Gallery';
import CartModal from './components/CartModal';

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.name === product.name);
    
    if (existingItem) {
      setCart(cart.map(item =>
        item.name === product.name
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productName) => {
    setCart(cart.filter(item => item.name !== productName));
  };

  const clearCart = () => {
    if (window.confirm('Are you sure you want to clear the cart?')) {
      setCart([]);
    }
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="App">
      <Header 
        cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
        onCartClick={toggleCart}
      />
      
      <ProductDetail onAddToCart={addToCart} />
      
      <Gallery onAddToCart={addToCart} />
      
      <CartModal
        isOpen={isCartOpen}
        cart={cart}
        onClose={toggleCart}
        onRemoveItem={removeFromCart}
        onClearCart={clearCart}
      />
    </div>
  );
}

export default App;
