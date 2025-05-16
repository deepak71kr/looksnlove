// src/components/Services/ServiceItem.jsx
import React from 'react';

const ServiceItem = ({ service }) => (
  <div className="service-item">
    <span className="service-name">{service.name}</span>
    <div className="price-buttons">
      {Object.entries(service.prices).map(([type, price]) => (
        <button key={type} className="price-btn">
          <span className="inr">₹</span>
          {price}
          <span className="add-icon">+</span>
        </button>
      ))}
    </div>
  </div>
);

export default ServiceItem;
