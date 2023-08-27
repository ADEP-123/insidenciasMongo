import { Router } from "express";
import getInitRoute from "./getData.js";
import postInitRoute from "./postData.js";
import putInitRoute from "./putData.js";
import deleteInitRoute from "./deleteData.js";
import { appToken } from "../services/tokenGenerator.js";
import { authorizationMiddleware } from "../middleware/authorizationMiddleware.js";
import { middlewareRateLimit } from "../middleware/rateLimitMiddleware.js";


const initApiRoutes = () => {
    const router = Router();
    router.use("/login", middlewareRateLimit, appToken);
    router.use("/get", middlewareRateLimit, authorizationMiddleware, getInitRoute());
    router.use("/post", middlewareRateLimit, authorizationMiddleware, postInitRoute());
    router.use("/put", middlewareRateLimit, authorizationMiddleware, putInitRoute());
    router.use("/delete", middlewareRateLimit, authorizationMiddleware, deleteInitRoute());
    return router
}

export default initApiRoutes