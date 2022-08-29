import Dishes from "../db/models/dishes";

export class DishesDal {

    public async createDish(dish: any) {
        dish = new Dishes({
            restaurantName: dish.restaurantName,
            dishName: dish.dishName,
            img_path: dish.img_path,
            ingredients: dish.ingredients,
            type_img: dish.type_img,
            price: dish.price,
            meal: dish.meal,
        });

        const response = await Dishes.create(dish);
        return response;
    }


    public findAll() {
        return Dishes.find();
    }

    // public findRestarantsDishes(resName: string) {
    //     return Dishes.find({ restaurantName: resName });
    // }
}


