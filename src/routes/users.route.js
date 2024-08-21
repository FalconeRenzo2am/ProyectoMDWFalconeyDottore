import { Router } from "express";
import { formatMiddleware } from "../middlewares/users.middleware.js";
import { createUser, deleteUser, getUser, getUsers, updateUser } from "../controllers/index.js";

const router = Router ();

router.get ("/" , getUsers );

router.get ("/:id" , getUser );

router.post ("/" , createUser );

router.put ("/:id" , updateUser );

router.delete ("/:id", deleteUser );

export default router;