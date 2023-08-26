import { Router } from 'express';
import { postAreasController, postCategoriasController, postEquipoController, postInsidenciasController, postLugaresController, postTipoEquipoController, postTiposController } from '../controllers/postDateController.js';
import { middlewarePostPutAreasDTO, middlewarePostPutCategoriasDTO, middlewarePostPutEquipoDTO, middlewarePostPutInsidenciasDTO, middlewarePostPutLugaresDTO, middlewarePostPutTipoEquipoDTO, middlewarePostPutTiposDTO } from '../middleware/middlewareDTO.js';
import { contentMiddlewareAreas, contentMiddlewareCategorias, contentMiddlewareEquipo, contentMiddlewareInsidencias, contentMiddlewareLugares, contentMiddlewareTipoEquipo, contentMiddlewareTipo } from "../middleware/contentVerifyMiddleware.js";

const postInitRoute = () => {
    const router = Router();
    router.post("/areas", contentMiddlewareAreas, middlewarePostPutAreasDTO, postAreasController);
    router.post("/categorias", contentMiddlewareCategorias, middlewarePostPutCategoriasDTO, postCategoriasController);
    router.post("/equipo", contentMiddlewareEquipo, middlewarePostPutEquipoDTO, postEquipoController);
    router.post("/insidencias", contentMiddlewareInsidencias, middlewarePostPutInsidenciasDTO, postInsidenciasController);
    router.post("/lugares", contentMiddlewareLugares, middlewarePostPutLugaresDTO, postLugaresController);
    router.post("/tipo_equipo", contentMiddlewareTipoEquipo, middlewarePostPutTipoEquipoDTO, postTipoEquipoController);
    router.post("/tipos", contentMiddlewareTipo, middlewarePostPutTiposDTO, postTiposController);
    return router
}

export default postInitRoute