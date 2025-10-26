import React from 'react';
import './ProductCard.css';

function ProductCard({ product, onAddToCart }) {
  return (
    <div className={`product-card ${product.featured ? 'featured' : ''}`}>
      {product.featured && <span className="badge">Best Seller</span>}
      <img src={product.image} alt={product.name} />
      <div className="product-info-card">
        <div>
          <span className="category-tag">{product.category}</span>
          <h3>{product.name}</h3>
        </div>
        <p className="price">${product.price.toFixed(2)}</p>
      </div>
      <button className="add-cart-btn" onClick={() => onAddToCart(product)}>
        ADD TO CART
      </button>
    </div>
  );
}

export default ProductCard;
