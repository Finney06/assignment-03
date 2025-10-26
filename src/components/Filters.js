import React, { useState } from 'react';
import './Filters.css';

function Filters({ onCategoryChange, onPriceChange }) {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedPrices, setSelectedPrices] = useState([]);

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    const newCategories = selectedCategories.includes(value)
      ? selectedCategories.filter(cat => cat !== value)
      : [...selectedCategories, value];
    
    setSelectedCategories(newCategories);
    onCategoryChange(newCategories);
  };

  const handlePriceChange = (e) => {
    const value = e.target.value;
    const newPrices = selectedPrices.includes(value)
      ? selectedPrices.filter(price => price !== value)
      : [...selectedPrices, value];
    
    setSelectedPrices(newPrices);
    onPriceChange(newPrices);
  };

  const categories = ['people', 'premium', 'pets', 'food', 'landmarks', 'cities', 'nature'];
  const priceRanges = [
    { value: 'lower20', label: 'Lower than $20' },
    { value: '20-100', label: '$20 - $100' },
    { value: '100-200', label: '$100 - $200' },
    { value: 'more200', label: 'More than $200' }
  ];

  return (
    <aside className="filters">
      <div className="filter-group">
        <h3>Category</h3>
        {categories.map(category => (
          <label key={category} className="checkbox-label">
            <input
              type="checkbox"
              name="category"
              value={category}
              onChange={handleCategoryChange}
            />
            <span>{category.charAt(0).toUpperCase() + category.slice(1)}</span>
          </label>
        ))}
      </div>

      <div className="filter-group">
        <h3>Price range</h3>
        {priceRanges.map(range => (
          <label key={range.value} className="checkbox-label">
            <input
              type="checkbox"
              name="price"
              value={range.value}
              onChange={handlePriceChange}
            />
            <span>{range.label}</span>
          </label>
        ))}
      </div>
    </aside>
  );
}

export default Filters;
