import mongoose from 'mongoose';
const restaurantsSchema = new mongoose.Schema(
  {
    img_path: {
      type: String,
      required: true
    },
    restaurantName: {
      type: String,
      required: true
    },
    chefName: {
      type: String,
      required: true
    },
    stars: {
      type: Number,
      required: true
    },
    popular: {
      type: Boolean,
      required: true
    },
    status: {
      type: String,
      required: true
    },
    newRes: {
      type: Boolean,
      required: true
    },
    dishes: {
      type: Array,
      required: false
    },
  },
  { timestamps: true }
);

const Restaurants = mongoose.model('Restaurants', restaurantsSchema);

export default Restaurants;

