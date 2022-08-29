import { RestaurantsDal } from "../dal/restaurants.dal";

export class RestaurantsService {

    public async getRestaurants(param: any) {
        const dal = new RestaurantsDal();
        const res = await dal.findAll();
        if (param === 'all') return res;
        if (param === 'open') {
            const today = new Date();
            const day = today.getDay();
            let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds(); console.log(time);
            res.filter(element => element.openHours[day].openHtour >= time && element.openHours[day].close)

        }
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



