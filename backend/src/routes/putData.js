import { Router } from 'express';
import { putAreasController, putCategoriasController, putEquipoController, putInsidenciasController, putLugaresController, putTipoEquipoController, putTiposController, putTrainerController } from '../controllers/putDataController.js';
import { middlewarePostPutAreasDTO, middlewarePostPutCategoriasDTO, middlewarePostPutEquipoDTO, middlewarePostPutInsidenciasDTO, middlewarePostPutLugaresDTO, middlewarePostPutTipoEquipoDTO, middlewarePostPutTiposDTO, middlewarePostPutTrainerDTO } from '../middleware/middlewareDTO.js';
import { contentMiddlewareAreas, contentMiddlewareCategorias, contentMiddlewareEquipo, contentMiddlewareInsidencias, contentMiddlewareLugares, contentMiddlewareTipoEquipo, contentMiddlewareTipo, contentMiddlewareTrainer } from "../middleware/contentVerifyMiddleware.js";
import { middlewareContentLengthAreas, middlewareContentLengthCategorias, middlewareContentLengthEquipo, middlewareContentLengthInsidencias, middlewareContentLengthLugares, middlewareContentLengthTipoEquipo, middlewareContentLengthTipos } from '../middleware/contentLengthMiddleware.js';

const putInitRoute = () => {
    const router = Router();
    router.put("/areas", middlewareContentLengthAreas, contentMiddlewareAreas, middlewarePostPutAreasDTO, putAreasController);
    router.put("/categorias", contentMiddlewareCategorias, middlewarePostPutCategoriasDTO, putCategoriasController);
    router.put("/equipo", middlewareContentLengthEquipo, middlewareContentLengthCategorias, contentMiddlewareEquipo, middlewarePostPutEquipoDTO, putEquipoController);
    router.put("/insidencias", middlewareContentLengthInsidencias, contentMiddlewareInsidencias, middlewarePostPutInsidenciasDTO, putInsidenciasController);
    router.put("/lugares", middlewareContentLengthLugares, contentMiddlewareLugares, middlewarePostPutLugaresDTO, putLugaresController);
    router.put("/tipo_equipo", middlewareContentLengthTipoEquipo, contentMiddlewareTipoEquipo, middlewarePostPutTipoEquipoDTO, putTipoEquipoController);
    router.put("/tipos", middlewareContentLengthTipos, contentMiddlewareTipo, middlewarePostPutTiposDTO, putTiposController);
    router.put("/trainer", contentMiddlewareTrainer, middlewarePostPutTrainerDTO, putTrainerController);
    return router
}

export default putInitRoute