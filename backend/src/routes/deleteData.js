import { Router } from 'express';
import { deleteAreasController, deleteCategoriasController, deleteEquipoController } from '../controllers/deleteDataController.js';
import { middlewareGetDeleteAreasDTO, middlewareGetDeleteCategoriasDTO, middlewareGetDeleteEquipoDTO } from '../middleware/middlewareDTO.js';
import { contentMiddlewareAreas, contentMiddlewareCategorias, contentMiddlewareEquipo } from "../middleware/contentVerifyMiddleware.js";

const deleteInitRoute = () => {
    const router = Router();
    router.delete("/areas", contentMiddlewareAreas, middlewareGetDeleteAreasDTO, deleteAreasController);
    router.delete("/categorias", contentMiddlewareCategorias, middlewareGetDeleteCategoriasDTO, deleteCategoriasController);
    router.delete("/equipo", contentMiddlewareEquipo, middlewareGetDeleteEquipoDTO, deleteEquipoController)
    return router
}

export default deleteInitRoute