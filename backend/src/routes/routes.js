import { Router } from "express";
import { appToken } from "../services/tokenGenerator.js";


const initApiRoutes = () => {
    const router = Router();
    router.use("/login", appToken)
    return router
}

export default initApiRoutes