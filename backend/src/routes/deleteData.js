import { Router } from 'express';
import { deleteAreasController, deleteCategoriasController, deleteEquipoController, deleteInsidenciasController, deleteLugaresController, deleteTipoEquipoController, deleteTiposController } from '../controllers/deleteDataController.js';
import { middlewareGetDeleteAreasDTO, middlewareGetDeleteCategoriasDTO, middlewareGetDeleteEquipoDTO, middlewareGetDeleteInsidenciasDTO, middlewareGetDeleteLugaresDTO, middlewareGetDeleteTipoEquipoDTO, middlewareGetDeleteTiposDTO } from '../middleware/middlewareDTO.js';
import { contentMiddlewareAreas, contentMiddlewareCategorias, contentMiddlewareEquipo, contentMiddlewareInsidencias, contentMiddlewareLugares, contentMiddlewareTipoEquipo, contentMiddlewareTipo } from "../middleware/contentVerifyMiddleware.js";

const deleteInitRoute = () => {
    const router = Router();
    router.delete("/areas", contentMiddlewareAreas, middlewareGetDeleteAreasDTO, deleteAreasController);
    router.delete("/categorias", contentMiddlewareCategorias, middlewareGetDeleteCategoriasDTO, deleteCategoriasController);
    router.delete("/equipo", contentMiddlewareEquipo, middlewareGetDeleteEquipoDTO, deleteEquipoController);
    router.delete("/insidencias", contentMiddlewareInsidencias, middlewareGetDeleteInsidenciasDTO, deleteInsidenciasController);
    router.delete("/lugares", contentMiddlewareLugares, middlewareGetDeleteLugaresDTO, deleteLugaresController);
    router.delete("/tipo_equipo", contentMiddlewareTipoEquipo, middlewareGetDeleteTipoEquipoDTO, deleteTipoEquipoController);
    router.delete("/tipos", contentMiddlewareTipo, middlewareGetDeleteTiposDTO, deleteTiposController);
    return router
}

export default deleteInitRoute