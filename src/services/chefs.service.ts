import { ChefsDal } from "../dal/chefs.dal";

export class ChefsService {

    public static async getChefs() {
        const dal = new ChefsDal();
        const res = await dal.findAll();
        return res;
    };

    public async createChef(chef: any) {
        const dal = new ChefsDal();
        const res = dal.createChef(chef);
        return res;
    };

    public async addChefRestaurant(newRes: any) {
        const dal = new ChefsDal();
        const res = dal.addChefRestaurant(newRes);
        return res;
    };

    public async getChef(param: any) {
        const dal = new ChefsDal();
        const res = await dal.getChef(param);
        return res;

    };
};



