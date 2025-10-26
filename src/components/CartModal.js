import React from 'react';
import './CartModal.css';

function CartModal({ isOpen, cart, onClose, onRemoveItem, onClearCart }) {
  if (!isOpen) return null;

  return (
    <>
      {/* Overlay to close modal when clicking outside */}
      <div className="modal-overlay" onClick={onClose}></div>
      <div className={`cart-modal ${isOpen ? 'active' : ''}`}>
        <div className="cart-modal-content">
          <div className="cart-header">
            <h2>Shopping Cart</h2>
            <button className="close-btn" onClick={onClose}>&times;</button>
          </div>
          
          <div className="cart-items">
            {cart.length === 0 ? (
              <p className="empty-cart">Your cart is empty</p>
            ) : (
              cart.map((item, index) => (
                <div key={index} className="cart-item">
                  <div className="cart-item-info">
                    <h4>{item.name}</h4>
                    <p className="cart-item-price">${item.price.toFixed(2)}</p>
                  </div>
                  <div className="cart-item-details">
                    <span className="quantity">Qty: {item.quantity}</span>
                    <button 
                      className="remove-btn"
                      onClick={() => onRemoveItem(item.name)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
          
          {cart.length > 0 && (
            <div className="cart-footer">
              <button className="clear-btn" onClick={onClearCart}>CLEAR</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default CartModal;
