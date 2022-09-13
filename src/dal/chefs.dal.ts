import Chefs from "../db/models/chefs";
import { RestaurantsDal } from "../dal/restaurants.dal";


export class ChefsDal {

  public async createChef(chef: any) {
    chef = new Chefs({
      name: chef.name,
      img: chef.img,
      new: chef.new,
      mostViewed: chef.mostViewed,
      restaurants: [],
    });

    const response = await Chefs.create(chef);
    return response;

  }


  public findAll() {
    return Chefs.find();
  }

  public async addChefRestaurant(newRes: any) {
    const restaurant = await RestaurantsDal.prototype.createRestaurant(newRes);
    const data = await Chefs.findOne({ name: newRes.chefName }).updateOne({ $push: { restaurants: restaurant._id } });
    const chef = await Chefs.findOne({ name: newRes.chefName });
    return chef;
  }

  public async getChef(param: any) {

    const data = await Chefs.aggregate([{ $match: { name: `${param.name}` } },
    {
      $lookup: {
        localField: "restaurants",
        foreignField: "_id",
        from: "restaurants",
        as: "restaurants"
      }
    }
    ]);
    return data
  }
}




