import { Router } from 'express';
import { deleteAreasController, deleteCategoriasController } from '../controllers/deleteDataController.js';
import { middlewareGetDeleteAreasDTO, middlewareGetDeleteCategoriasDTO } from '../middleware/middlewareDTO.js';
import { contentMiddlewareAreas, contentMiddlewareCategorias } from "../middleware/contentVerifyMiddleware.js";

const deleteInitRoute = () => {
    const router = Router();
    router.delete("/areas", contentMiddlewareAreas, middlewareGetDeleteAreasDTO, deleteAreasController);
    router.delete("/categorias", contentMiddlewareCategorias, middlewareGetDeleteCategoriasDTO, deleteCategoriasController);
    return router
}

export default deleteInitRoute