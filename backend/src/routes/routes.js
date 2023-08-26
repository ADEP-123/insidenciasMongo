import { Router } from "express";
import getInitRoute from "./getData.js";
import postInitRoute from "./postData.js";
import putInitRoute from "./putData.js";
import deleteInitRoute from "./deleteData.js";
import { appToken } from "../services/tokenGenerator.js";
import { authorizationMiddleware } from "../middleware/authorizationMiddleware.js";
import { contentMiddleware } from "../middleware/contentVerifyMiddleware.js";


const initApiRoutes = () => {
    const router = Router();
    router.use("/login", appToken);
    router.use("/get", authorizationMiddleware, contentMiddleware, getInitRoute());
    router.use("/post", postInitRoute());
    router.use("/put", putInitRoute());
    router.use("/delete", deleteInitRoute());
    return router
}

export default initApiRoutes