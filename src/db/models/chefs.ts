import mongoose from 'mongoose';

const chefsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    img: {
      type: String,
      required: true
    },
    new: {
      type: Boolean,
      required: true
    },
    mostViewed: {
      type: Boolean,
      required: true
    },
    restaurants: {
      type: Array,
      required: false
    },
  },
  { timestamps: true }
);

const Chefs = mongoose.model('Chefs', chefsSchema);

export default Chefs;

