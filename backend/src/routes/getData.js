import { Router } from 'express';
import { getAreasController, getCategoriasController } from '../controllers/getDataController.js';
import { middlewareGetDeleteAreasDTO, middlewareGetDeleteCategoriasDTO } from '../middleware/middlewareDTO.js';
import { contentMiddlewareAreas, contentMiddlewareCategorias } from "../middleware/contentVerifyMiddleware.js";


const getInitRoute = () => {
    const router = Router();
    router.get("/areas", contentMiddlewareAreas, middlewareGetDeleteAreasDTO, getAreasController);
    router.get("/categorias", contentMiddlewareCategorias, middlewareGetDeleteCategoriasDTO, getCategoriasController);
    return router
}

export default getInitRoute