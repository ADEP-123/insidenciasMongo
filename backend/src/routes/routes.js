import { Router } from "express";
import getInitRoute from "./getData.js";
import postInitRoute from "./postData.js";
import putInitRoute from "./putData.js";
import deleteInitRoute from "./deleteData.js";
import { appToken } from "../services/tokenGenerator.js";
import { authorizationMiddleware } from "../middleware/authorizationMiddleware.js";


const initApiRoutes = () => {
    const router = Router();
    router.use("/login", appToken);
    router.use("/get", authorizationMiddleware,  getInitRoute());
    router.use("/post", authorizationMiddleware,  postInitRoute());
    router.use("/put", authorizationMiddleware,  putInitRoute());
    router.use("/delete", authorizationMiddleware,  deleteInitRoute());
    return router
}

export default initApiRoutes