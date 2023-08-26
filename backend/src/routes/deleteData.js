import { Router } from 'express';
import { deleteAreasController, deleteCategoriasController, deleteEquipoController, deleteInsidenciasController } from '../controllers/deleteDataController.js';
import { middlewareGetDeleteAreasDTO, middlewareGetDeleteCategoriasDTO, middlewareGetDeleteEquipoDTO, middlewareGetDeleteInsidenciasDTO, } from '../middleware/middlewareDTO.js';
import { contentMiddlewareAreas, contentMiddlewareCategorias, contentMiddlewareEquipo,contentMiddlewareInsidencias } from "../middleware/contentVerifyMiddleware.js";

const deleteInitRoute = () => {
    const router = Router();
    router.delete("/areas", contentMiddlewareAreas, middlewareGetDeleteAreasDTO, deleteAreasController);
    router.delete("/categorias", contentMiddlewareCategorias, middlewareGetDeleteCategoriasDTO, deleteCategoriasController);
    router.delete("/equipo", contentMiddlewareEquipo, middlewareGetDeleteEquipoDTO, deleteEquipoController);
    router.delete("/insidencias", contentMiddlewareInsidencias, middlewareGetDeleteInsidenciasDTO, deleteInsidenciasController);
    return router
}

export default deleteInitRoute