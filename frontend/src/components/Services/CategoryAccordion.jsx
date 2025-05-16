// src/components/Services/CategoryAccordion.jsx
import React, { useState } from 'react';
import CategoryDetails from './CategoryDetails';

const CategoryAccordion = ({ categories }) => {
  const [openIndex, setOpenIndex] = useState(null);
<<<<<<< HEAD

  return (
    <div className="accordion-container">
      {categories.map((category, index) => (
        <div key={category.category} className="accordion-item">
          <div 
            className="accordion-header" 
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <h3>{category.category}</h3>
          </div>
          {openIndex === index && (
            <CategoryDetails category={category} />
          )}
        </div>
      ))}
=======
  
  console.log('CategoryAccordion received categories:', categories);

  return (
    <div className="accordion-container">
      {categories && categories.length > 0 ? (
        categories.map((category, index) => {
          console.log('Rendering category:', category);
          return (
            <div key={category.category} className="accordion-item">
              <div 
                className="accordion-header" 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h3>{category.category}</h3>
              </div>
              {openIndex === index && (
                <CategoryDetails category={category} />
              )}
            </div>
          );
        })
      ) : (
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          No categories available
        </div>
      )}
>>>>>>> e693f90487278cef39e5d052507d7defab754fcf
    </div>
  );
};

export default CategoryAccordion;
