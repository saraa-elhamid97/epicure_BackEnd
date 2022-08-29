import { RestaurantsDal } from "../dal/restaurants.dal";

export class RestaurantsService {

    public async getRestaurants() {
        const dal = new RestaurantsDal();
        const res = await dal.findAll();
        return res;
    };

    public async createRestaurant(restaurant: any) {
        const dal = new RestaurantsDal();
        const res = dal.createRestaurant(restaurant);
        return res;
    };


    public async addDishToRestaurant(newDish: any) {
        const dal = new RestaurantsDal();
        const res = dal.addDishToRestaurant(newDish);
        return res;
    };

    public async getRestaurant(param: any) {
        const dal = new RestaurantsDal();
        const res = await dal.getRestaurant(param);
        return res;

    };

};



