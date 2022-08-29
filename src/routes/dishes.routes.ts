import { Router } from "express";
import { DishesController } from "../controllers/dishesController";

const router = Router();

router.get("/getDishes", DishesController.getDishes);
router.post("/createDish", DishesController.createDish);
//router.get("/getRestaurantsDishes", DishesController.getRestaurantsDishes);


export default router;


