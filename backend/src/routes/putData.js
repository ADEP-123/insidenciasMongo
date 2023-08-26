import { Router } from 'express';
import { putAreasController, putCategoriasController, putEquipoController, putInsidenciasController, putLugaresController, putTipoEquipoController } from '../controllers/putDataController.js';
import { middlewarePostPutAreasDTO, middlewarePostPutCategoriasDTO, middlewarePostPutEquipoDTO, middlewarePostPutInsidenciasDTO, middlewarePostPutLugaresDTO, middlewarePostPutTipoEquipoDTO } from '../middleware/middlewareDTO.js';
import { contentMiddlewareAreas, contentMiddlewareCategorias, contentMiddlewareEquipo, contentMiddlewareInsidencias, contentMiddlewareLugares, contentMiddlewareTipoEquipo } from "../middleware/contentVerifyMiddleware.js";

const putInitRoute = () => {
    const router = Router();
    router.put("/areas", contentMiddlewareAreas, middlewarePostPutAreasDTO, putAreasController);
    router.put("/categorias", contentMiddlewareCategorias, middlewarePostPutCategoriasDTO, putCategoriasController);
    router.put("/equipo", contentMiddlewareEquipo, middlewarePostPutEquipoDTO, putEquipoController);
    router.put("/insidencias", contentMiddlewareInsidencias, middlewarePostPutInsidenciasDTO, putInsidenciasController);
    router.put("/lugares", contentMiddlewareLugares, middlewarePostPutLugaresDTO, putLugaresController);
    router.put("/tipo_equipo", contentMiddlewareTipoEquipo, middlewarePostPutTipoEquipoDTO, putTipoEquipoController);
    return router
}

export default putInitRoute