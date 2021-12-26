import {model, Schema, models} from 'mongoose';

let productSchema = new Schema({
  product_name: {
    type: String,
    default: null,
    required: true,
  },
  product_creator: {
    type: String,
    default: null,
    required: true,
  },
  product_price: {
    type: Number,
    default: null,
    required: true,
  },
  product_image: {
    type: String,
    default: null,
    required: true,
  },
  product_id: {
    type: String,
    default: null,
    required: true,
  },
  product_description: {
    type: String,
    default: null,
    required: true,
  },
});

export default models['product'] || model('product', productSchema);
