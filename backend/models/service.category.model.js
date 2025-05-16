// models/ServiceCategory.js
import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  prices: {
    Normal: { type: Number, required: true },
    Premium: Number,
    Luxury: Number
  }
});

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  services: [serviceSchema]
});

const ServiceCategory = mongoose.model('ServiceCategory', categorySchema);

export default ServiceCategory;
