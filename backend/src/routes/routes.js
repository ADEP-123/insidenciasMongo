import { Router } from "express";


const initApiRoutes = () => {
    const router = Router();
    router.use("/", (req, res, next) => {
        res.send("Trabajando")
    })
    return router
}

export default initApiRoutes