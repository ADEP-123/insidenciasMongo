import { Router } from 'express';
import { getAreasController, getCategoriasController, getEquipoController, getInsidenciasController, getLugaresController } from '../controllers/getDataController.js';
import { middlewareGetDeleteAreasDTO, middlewareGetDeleteCategoriasDTO, middlewareGetDeleteEquipoDTO, middlewareGetDeleteInsidenciasDTO, middlewareGetDeleteLugaresDTO } from '../middleware/middlewareDTO.js';
import { contentMiddlewareAreas, contentMiddlewareCategorias, contentMiddlewareEquipo, contentMiddlewareInsidencias, contentMiddlewareLugares } from "../middleware/contentVerifyMiddleware.js";


const getInitRoute = () => {
    const router = Router();
    router.get("/areas", contentMiddlewareAreas, middlewareGetDeleteAreasDTO, getAreasController);
    router.get("/categorias", contentMiddlewareCategorias, middlewareGetDeleteCategoriasDTO, getCategoriasController);
    router.get("/equipo", contentMiddlewareEquipo, middlewareGetDeleteEquipoDTO, getEquipoController);
    router.get("/insidencias", contentMiddlewareInsidencias, middlewareGetDeleteInsidenciasDTO, getInsidenciasController);
    router.get("/lugares", contentMiddlewareLugares, middlewareGetDeleteLugaresDTO, getLugaresController);
    return router
}

export default getInitRoute