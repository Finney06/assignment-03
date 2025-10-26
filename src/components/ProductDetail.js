import React from 'react';
import heroImage from '../assets/images/hero-image.png';
import image1 from '../assets/images/image-1.png';
import image2 from '../assets/images/image-2.png';
import image3 from '../assets/images/image-3.png';
import './ProductDetail.css';

function ProductDetail({ onAddToCart }) {
  // Featured product data
  const featuredProduct = {
    name: 'Samurai King Resting',
    price: 119.99,
    category: 'Pets',
    image: heroImage
  };

  return (
    <section className="product-detail">
      <div className="container">
        {/* Title and Add to Cart button side by side */}
        <div className="product-header">
          <h1 className="product-title">Samurai King Resting</h1>
          <button className="add-to-cart-btn" onClick={() => onAddToCart(featuredProduct)}>
            ADD TO CART
          </button>
        </div>
        
        <div className="product-image-wrapper">
          <img src={heroImage} alt="Samurai King Resting" className="product-image" />
          <span className="photo-label">Photo of the day</span>
        </div>

        <div className="product-info">
          <div className="about-section">
            <h2>About the Samurai King Resting</h2>
            <h3>Pets</h3>
            <p>
              So how did the classical Latin become so incoherent? According to McClintock, 
              a 15th century typesetter likely scrambled part of Cicero's De Finibus in order 
              to provide placeholder text to mockup various fonts for a type specimen book.
              So how did the classical Latin become so incoherent? According to McClintock, 
              a 15th century typesetter likely scrambled part of Cicero's De Finibus in order 
              to provide placeholder text to mockup various fonts for a type specimen book.
              So how did the classical Latin become so incoherent? According to McClintock, 
              a 15th century typesetter.
            </p>
            <p className="additional-text">
              text to mockup various fonts for a type specimen book.So how did the classical 
              Latin become so incoherent? According to McClintock.
            </p>
          </div>

          <div className="people-also-buy">
            <h2>People also buy</h2>
            <div className="recommendation-grid">
              <div className="recommendation-item">
                <img src={image1} alt="Recommendation 1" />
              </div>
              <div className="recommendation-item">
                <img src={image2} alt="Recommendation 2" />
              </div>
              <div className="recommendation-item">
                <img src={image3} alt="Recommendation 3" />
              </div>
            </div>
            <div className="product-details">
              <h3>Details</h3>
              <p>Size: 1020 x 1020 pixel</p>
              <p>Size: 15 mb</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetail;
