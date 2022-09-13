import mongoose from 'mongoose';

const dishesSchema = new mongoose.Schema(
    {
        restaurantName: {
            type: String,
            required: true
        },
        dishName: {
            type: String,
            required: true
        },
        img_path: {
            type: String,
            required: true
        },
        ingredients: {
            type: String,
            required: true
        },
        type_img: {
            type: String,
            required: false
        },
        price: {
            type: Number,
            required: true
        },
        meal: {
            type: String,
            required: true
        },
    },
    { timestamps: true }
);

const Dishes = mongoose.model('Dishes', dishesSchema);

export default Dishes;

