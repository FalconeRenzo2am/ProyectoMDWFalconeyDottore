import { Router } from "express";
import usersRouter from "./users.route.js";
import productsRouter from "./products.routes.js"

const router = Router ();

router.use("/users",usersRouter);
router.use(productsRouter);

export default router;