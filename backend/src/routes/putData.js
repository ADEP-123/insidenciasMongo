import { Router } from 'express';
import { putAreasController, putCategoriasController, putEquipoController } from '../controllers/putDataController.js';
import { middlewarePostPutAreasDTO, middlewarePostPutCategoriasDTO, middlewarePostPutEquipoDTO } from '../middleware/middlewareDTO.js';
import { contentMiddlewareAreas, contentMiddlewareCategorias, contentMiddlewareEquipo } from "../middleware/contentVerifyMiddleware.js";

const putInitRoute = () => {
    const router = Router();
    router.put("/areas", contentMiddlewareAreas, middlewarePostPutAreasDTO, putAreasController);
    router.put("/categorias", contentMiddlewareCategorias, middlewarePostPutCategoriasDTO, putCategoriasController);
    router.put("/equipo", contentMiddlewareEquipo, middlewarePostPutEquipoDTO, putEquipoController)
    return router
}

export default putInitRoute