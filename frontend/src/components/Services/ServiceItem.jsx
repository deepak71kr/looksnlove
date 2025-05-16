// src/components/Services/ServiceItem.jsx
import React from 'react';

const ServiceItem = ({ service }) => (
  <div className="service-item">
    <span className="service-name">{service.name}</span>
    <div className="price-buttons">
<<<<<<< HEAD
      {service.prices.map((price, index) => (
        <button key={index} className="price-btn">
=======
      {Object.entries(service.prices).map(([type, price]) => (
        <button key={type} className="price-btn">
>>>>>>> e693f90487278cef39e5d052507d7defab754fcf
          <span className="inr">₹</span>
          {price}
          <span className="add-icon">+</span>
        </button>
      ))}
    </div>
  </div>
);

export default ServiceItem;
