// src/pages/ServicesPage.jsx
import React, { useState, useEffect } from 'react';
import CategoryAccordion from '../components/Services/CategoryAccordion';
import api from '../api/api';
import '../components/Services/services.css';

const ServicesPage = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        console.log('Fetching categories...');
        const response = await api.get('/categories');
        console.log('API Response:', response.data);
        
        // Transform the data to match our frontend structure
        const transformedData = response.data.map(category => ({
          category: category.name,
          image: `/images/${category.name.toLowerCase()}.jpg`,
          subcategories: category.services.map(service => ({
            name: service.name,
            prices: service.prices
          }))
        }));
        console.log('Transformed Data:', transformedData);
        setCategories(transformedData);
      } catch (err) {
        console.error('Error fetching categories:', err);
        setError('Failed to load services. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  console.log('Current state:', { categories, loading, error });

  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        Loading services...
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ textAlign: 'center', padding: '2rem', color: 'red' }}>
        {error}
      </div>
    );
  }

  return (
    <div className="services-page">
      <h1 style={{ 
        textAlign: 'center', 
        color: '#1976d2',
        margin: '2rem 0'
      }}>
        Our Services
      </h1>
      {categories.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          No services available at the moment.
        </div>
      ) : (
        <CategoryAccordion categories={categories} />
      )}
    </div>
  );
};

export default ServicesPage;
