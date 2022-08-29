import { Router } from "express";
import { RestaurantsController } from "../controllers/restaurantsController";

const router = Router();

router.get("/getRestaurants", RestaurantsController.getRestaurants);
router.post("/createRestaurant", RestaurantsController.createRestaurant);
router.post("/addDishToRestaurant", RestaurantsController.addDishToRestaurant);
router.get("/getRestaurant", RestaurantsController.getRestaurant);


export default router;


