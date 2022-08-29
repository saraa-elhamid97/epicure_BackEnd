import Restaurants from "../db/models/restaurants";
import { DishesDal } from "../dal/dishes.dal";
import { DishesController } from "../controllers/dishesController";

export class RestaurantsDal {

  public async createRestaurant(restaurant: any) {
    restaurant = new Restaurants({
      img_path: restaurant.img_path,
      restaurantName: restaurant.restaurantName,
      chefName: restaurant.chefName,
      stars: restaurant.stars,
      popular: restaurant.popular,
      status: restaurant.status,
      newRes: restaurant.newRes,
      dishes: [],

    });

    const response = await Restaurants.create(restaurant);
    return response;
  }

  public findAll() {
    return Restaurants.find();
  }



  public async addDishToRestaurant(newDish: any) {
    const stam = 5;
    const dish = await DishesDal.prototype.createDish(newDish);
    const data = await Restaurants.findOne({ restaurantName: newDish.restaurantName }).updateOne({ $push: { dishes: dish._id } });
    return data
  }

  public async getRestaurant(param: any) {

    const data = await Restaurants.aggregate([{ $match: { restaurantName: `${param.name}` } },
    {
      $lookup: {
        localField: "dishes",
        foreignField: "_id",
        from: "dishes",
        as: "dishes"
      }
    }
    ]);
    return data
  }


}


