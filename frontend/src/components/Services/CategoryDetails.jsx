// src/components/Services/CategoryDetails.jsx
import React from 'react';
import ServiceItem from './ServiceItem';

<<<<<<< HEAD
const CategoryDetails = ({ category }) => (
  <div className="category-details">
    <div className="category-header">
      <h2>{category.category}</h2>
      <img 
        src={category.image} 
        alt={category.category} 
        className="category-image" 
      />
    </div>
    <div className="services-list">
      {category.subcategories.map((service, index) => (
        <ServiceItem key={index} service={service} />
      ))}
    </div>
  </div>
);
=======
const CategoryDetails = ({ category }) => {
  console.log('CategoryDetails received category:', category);
  
  return (
    <div className="category-details">
      <div className="category-header">
        <h2>{category.category}</h2>
        <img 
          src={category.image} 
          alt={category.category} 
          className="category-image" 
        />
      </div>
      <div className="services-list">
        {category.services && category.services.length > 0 ? (
          category.services.map((service) => {
            console.log('Rendering service:', service);
            return (
              <ServiceItem key={service.name} service={service} />
            );
          })
        ) : (
          <div style={{ textAlign: 'center', padding: '1rem' }}>
            No services available in this category
          </div>
        )}
      </div>
    </div>
  );
};
>>>>>>> e693f90487278cef39e5d052507d7defab754fcf

export default CategoryDetails;
