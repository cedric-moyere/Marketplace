const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  imageUrl: { type: String, required: true },
  price: { type: Number, required: true },
  inStock: { type: Boolean, required: true }
});

module.exports = mongoose.model('Product', productSchema);