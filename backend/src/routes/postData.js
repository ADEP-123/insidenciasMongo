import { Router } from 'express';
import { postAreasController, postCategoriasController } from '../controllers/postDateController.js';
import { middlewarePostPutAreasDTO, middlewarePostPutCategoriasDTO } from '../middleware/middlewareDTO.js';
import { contentMiddlewareAreas, contentMiddlewareCategorias } from "../middleware/contentVerifyMiddleware.js";

const postInitRoute = () => {
    const router = Router();
    router.post("/areas", contentMiddlewareAreas, middlewarePostPutAreasDTO, postAreasController);
    router.post("/categorias", contentMiddlewareCategorias, middlewarePostPutCategoriasDTO, postCategoriasController);
    return router
}

export default postInitRoute