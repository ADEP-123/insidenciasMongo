import { Router } from 'express';
import { putAreasController, putCategoriasController } from '../controllers/putDataController.js';
import { middlewarePostPutAreasDTO, middlewarePostPutCategoriasDTO } from '../middleware/middlewareDTO.js';
import { contentMiddlewareAreas, contentMiddlewareCategorias } from "../middleware/contentVerifyMiddleware.js";

const putInitRoute = () => {
    const router = Router()
    router.put("/areas", contentMiddlewareAreas, middlewarePostPutAreasDTO, putAreasController)
    router.put("/categorias", contentMiddlewareCategorias, middlewarePostPutCategoriasDTO, putCategoriasController)
    return router
}

export default putInitRoute