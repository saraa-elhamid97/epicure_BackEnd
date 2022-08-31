import { Router } from "express";
import { ChefsController } from "../controllers/chefsController";

const router = Router();

router.get("/getChefs", ChefsController.getChefs);
router.post("/createChef", ChefsController.createChef);
router.post("/addChefRestaurant", ChefsController.addChefRestaurant);
router.get("/getChef", ChefsController.getChef);
export default router;


