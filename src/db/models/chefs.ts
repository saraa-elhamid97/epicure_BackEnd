import mongoose from 'mongoose';

const chefsSchema = new mongoose.Schema(
    {
      name: {
        type: String,
        required: true
      },
      age: {
        type: Number,
        required: true
      },
    },
    { timestamps: true }
  );
  
const Chefs = mongoose.model('Chefs', chefsSchema);
  
export default Chefs;

