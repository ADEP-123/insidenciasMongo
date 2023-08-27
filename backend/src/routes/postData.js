import { Router } from 'express';
import { postAreasController, postCategoriasController, postEquipoController, postInsidenciasController, postLugaresController, postTipoEquipoController, postTiposController, postTrainerController } from '../controllers/postDateController.js';
import { middlewarePostPutAreasDTO, middlewarePostPutCategoriasDTO, middlewarePostPutEquipoDTO, middlewarePostPutInsidenciasDTO, middlewarePostPutLugaresDTO, middlewarePostPutTipoEquipoDTO, middlewarePostPutTiposDTO, middlewarePostPutTrainerDTO } from '../middleware/middlewareDTO.js';
import { contentMiddlewareAreas, contentMiddlewareCategorias, contentMiddlewareEquipo, contentMiddlewareInsidencias, contentMiddlewareLugares, contentMiddlewareTipoEquipo, contentMiddlewareTipo, contentMiddlewareTrainer } from "../middleware/contentVerifyMiddleware.js";
import { middlewareContentLengthAreas } from '../middleware/contentLengthMiddleware.js';

const postInitRoute = () => {
    const router = Router();
    router.post("/areas", middlewareContentLengthAreas, contentMiddlewareAreas, middlewarePostPutAreasDTO, postAreasController);
    router.post("/categorias", contentMiddlewareCategorias, middlewarePostPutCategoriasDTO, postCategoriasController);
    router.post("/equipo", contentMiddlewareEquipo, middlewarePostPutEquipoDTO, postEquipoController);
    router.post("/insidencias", contentMiddlewareInsidencias, middlewarePostPutInsidenciasDTO, postInsidenciasController);
    router.post("/lugares", contentMiddlewareLugares, middlewarePostPutLugaresDTO, postLugaresController);
    router.post("/tipo_equipo", contentMiddlewareTipoEquipo, middlewarePostPutTipoEquipoDTO, postTipoEquipoController);
    router.post("/tipos", contentMiddlewareTipo, middlewarePostPutTiposDTO, postTiposController);
    router.post("/trainer", contentMiddlewareTrainer, middlewarePostPutTrainerDTO, postTrainerController);
    return router
}

export default postInitRoute