import { Router } from 'express';
import { postAreasController, postCategoriasController, postEquipoController, postInsidenciasController, postLugaresController, postTipoEquipoController } from '../controllers/postDateController.js';
import { middlewarePostPutAreasDTO, middlewarePostPutCategoriasDTO, middlewarePostPutEquipoDTO, middlewarePostPutInsidenciasDTO, middlewarePostPutLugaresDTO, middlewarePostPutTipoEquipoDTO } from '../middleware/middlewareDTO.js';
import { contentMiddlewareAreas, contentMiddlewareCategorias, contentMiddlewareEquipo, contentMiddlewareInsidencias, contentMiddlewareLugares, contentMiddlewareTipoEquipo } from "../middleware/contentVerifyMiddleware.js";

const postInitRoute = () => {
    const router = Router();
    router.post("/areas", contentMiddlewareAreas, middlewarePostPutAreasDTO, postAreasController);
    router.post("/categorias", contentMiddlewareCategorias, middlewarePostPutCategoriasDTO, postCategoriasController);
    router.post("/equipo", contentMiddlewareEquipo, middlewarePostPutEquipoDTO, postEquipoController);
    router.post("/insidencias", contentMiddlewareInsidencias, middlewarePostPutInsidenciasDTO, postInsidenciasController);
    router.post("/lugares", contentMiddlewareLugares, middlewarePostPutLugaresDTO, postLugaresController);
    router.post("/tipo_equipo", contentMiddlewareTipoEquipo, middlewarePostPutTipoEquipoDTO, postTipoEquipoController);
    return router
}

export default postInitRoute