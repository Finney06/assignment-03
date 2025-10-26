import React, { useState, useEffect, useMemo } from 'react';
import ProductCard from './ProductCard';
import Filters from './Filters';
import Pagination from './Pagination';
import image1 from '../assets/images/image-1.png';
import image2 from '../assets/images/image-2.png';
import image3 from '../assets/images/image-3.png';
import image4 from '../assets/images/image-4.png';
import './Gallery.css';

function Gallery({ onAddToCart }) {
  const allProducts = useMemo(() => [
    { name: 'Red Bench', category: 'people', price: 3.89, image: image1, featured: true },
    { name: 'Egg Balloon', category: 'food', price: 93.89, image: image2 },
    { name: 'Egg Balloon', category: 'food', price: 93.89, image: image2 },
    { name: 'Man', category: 'people', price: 100.00, image: image3 },
    { name: 'Architecture', category: 'landmarks', price: 101.00, image: image4 },
    { name: 'Architecture', category: 'landmarks', price: 101.00, image: image4 },
  ], []);

  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const [sortBy, setSortBy] = useState('price');
  const [categoryFilters, setCategoryFilters] = useState([]);
  const [priceFilters, setPriceFilters] = useState([]);

  const filterAndSortProducts = React.useCallback(() => {
    let filtered = [...allProducts];

    // Apply category filters
    if (categoryFilters.length > 0) {
      filtered = filtered.filter(product => 
        categoryFilters.includes(product.category)
      );
    }

    // Apply price filters
    if (priceFilters.length > 0) {
      filtered = filtered.filter(product => {
        return priceFilters.some(range => {
          if (range === 'lower20') return product.price < 20;
          if (range === '20-100') return product.price >= 20 && product.price <= 100;
          if (range === '100-200') return product.price > 100 && product.price <= 200;
          if (range === 'more200') return product.price > 200;
          return true;
        });
      });
    }

    // Sort products
    filtered.sort((a, b) => {
      if (sortBy === 'price') {
        return a.price - b.price;
      } else if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      }
      return 0;
    });

    setFilteredProducts(filtered);
  }, [categoryFilters, priceFilters, sortBy, allProducts]);

  useEffect(() => {
    filterAndSortProducts();
  }, [filterAndSortProducts]);

  const handleCategoryChange = (categories) => {
    setCategoryFilters(categories);
  };

  const handlePriceChange = (prices) => {
    setPriceFilters(prices);
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  return (
    <section className="gallery-section">
      <div className="container">
        <div className="gallery-header">
          <div className="gallery-title">
            <h2>Photography</h2>
            <span className="separator">/</span>
            <span className="category">Premium Photos</span>
          </div>
          <div className="sort-controls">
            <span className="sort-label">⬆ Sort By</span>
            <select 
              id="sortDropdown" 
              className="sort-dropdown" 
              value={sortBy}
              onChange={handleSortChange}
            >
              <option value="price">Price</option>
              <option value="name">Name</option>
              <option value="date">Date</option>
            </select>
          </div>
        </div>

        <div className="gallery-content">
          <Filters 
            onCategoryChange={handleCategoryChange}
            onPriceChange={handlePriceChange}
          />

          <div className="products-grid">
            {filteredProducts.map((product, index) => (
              <ProductCard
                key={index}
                product={product}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        </div>

        <Pagination />
      </div>
    </section>
  );
}

export default Gallery;
