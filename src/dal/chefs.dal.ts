import Chefs from "../db/models/chefs";

export class ChefsDal {

  public async createChef(chef: any) {
    chef = new Chefs({
      name: chef.name,
      age: chef.age,
    });

    const response = await Chefs.create(chef);
    return response;

  }

  public async updateChef(chef: any) {
    const data = await Chefs.findOne({
      name: chef.name,
    }).updateOne({ $set: { age: chef.age, }, })
    return data
  }


  public findAll(query: any = null) {
    return Chefs.find(query);
  }
}


