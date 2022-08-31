import { Request, Response } from "express";
import { ChefsService } from "../services/chefs.service";

export class ChefsController {

    public static async getChefs(req: Request, res: Response) {
        const chefs = await ChefsService.getChefs();
        return res.send(chefs);
    };

    public static async createChef(req: Request, res: Response) {
        const params = req.body;
        const service = new ChefsService();
        const chef = await service.createChef(params);
        return res.send(chef);
    };

    public static async addChefRestaurant(req: Request, res: Response) {
        const service = new ChefsService();
        const chef = await service.addChefRestaurant(req.body);
        return res.send(chef);
    };

    public static async getChef(req: Request, res: Response) {
        const service = new ChefsService();
        const chef = await service.getChef(req.query);
        return res.send(chef);
    };




};

