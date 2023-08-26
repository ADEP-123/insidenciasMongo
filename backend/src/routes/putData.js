import { Router } from 'express';
import { putAreasController, putCategoriasController, putEquipoController, putInsidenciasController } from '../controllers/putDataController.js';
import { middlewarePostPutAreasDTO, middlewarePostPutCategoriasDTO, middlewarePostPutEquipoDTO, middlewarePostPutInsidenciasDTO } from '../middleware/middlewareDTO.js';
import { contentMiddlewareAreas, contentMiddlewareCategorias, contentMiddlewareEquipo, contentMiddlewareInsidencias } from "../middleware/contentVerifyMiddleware.js";

const putInitRoute = () => {
    const router = Router();
    router.put("/areas", contentMiddlewareAreas, middlewarePostPutAreasDTO, putAreasController);
    router.put("/categorias", contentMiddlewareCategorias, middlewarePostPutCategoriasDTO, putCategoriasController);
    router.put("/equipo", contentMiddlewareEquipo, middlewarePostPutEquipoDTO, putEquipoController);
    router.put("/insidencias", contentMiddlewareInsidencias, middlewarePostPutInsidenciasDTO, putInsidenciasController);
    return router
}

export default putInitRoute