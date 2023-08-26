import { Router } from 'express';
import { postAreasController, postCategoriasController, postEquipoController, postInsidenciasController } from '../controllers/postDateController.js';
import { middlewarePostPutAreasDTO, middlewarePostPutCategoriasDTO, middlewarePostPutEquipoDTO, middlewarePostPutInsidenciasDTO } from '../middleware/middlewareDTO.js';
import { contentMiddlewareAreas, contentMiddlewareCategorias, contentMiddlewareEquipo, contentMiddlewareInsidencias } from "../middleware/contentVerifyMiddleware.js";

const postInitRoute = () => {
    const router = Router();
    router.post("/areas", contentMiddlewareAreas, middlewarePostPutAreasDTO, postAreasController);
    router.post("/categorias", contentMiddlewareCategorias, middlewarePostPutCategoriasDTO, postCategoriasController);
    router.post("/equipo", contentMiddlewareEquipo, middlewarePostPutEquipoDTO, postEquipoController);
    router.post("/insidencias", contentMiddlewareInsidencias, middlewarePostPutInsidenciasDTO, postInsidenciasController);
    return router
}

export default postInitRoute