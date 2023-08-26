import { Router } from 'express';
import { postAreasController, postCategoriasController, postEquipoController } from '../controllers/postDateController.js';
import { middlewarePostPutAreasDTO, middlewarePostPutCategoriasDTO, middlewarePostPutEquipoDTO } from '../middleware/middlewareDTO.js';
import { contentMiddlewareAreas, contentMiddlewareCategorias, contentMiddlewareEquipo } from "../middleware/contentVerifyMiddleware.js";

const postInitRoute = () => {
    const router = Router();
    router.post("/areas", contentMiddlewareAreas, middlewarePostPutAreasDTO, postAreasController);
    router.post("/categorias", contentMiddlewareCategorias, middlewarePostPutCategoriasDTO, postCategoriasController);
    router.post("/equipo", contentMiddlewareEquipo, middlewarePostPutEquipoDTO, postEquipoController);
    return router
}

export default postInitRoute