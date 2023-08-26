import { Router } from 'express';
import { getAreasController, getCategoriasController, getEquipoController, getInsidenciasController } from '../controllers/getDataController.js';
import { middlewareGetDeleteAreasDTO, middlewareGetDeleteCategoriasDTO, middlewareGetDeleteEquipoDTO, middlewareGetDeleteInsidenciasDTO } from '../middleware/middlewareDTO.js';
import { contentMiddlewareAreas, contentMiddlewareCategorias, contentMiddlewareEquipo, contentMiddlewareInsidencias } from "../middleware/contentVerifyMiddleware.js";


const getInitRoute = () => {
    const router = Router();
    router.get("/areas", contentMiddlewareAreas, middlewareGetDeleteAreasDTO, getAreasController);
    router.get("/categorias", contentMiddlewareCategorias, middlewareGetDeleteCategoriasDTO, getCategoriasController);
    router.get("/equipo", contentMiddlewareEquipo, middlewareGetDeleteEquipoDTO, getEquipoController);
    router.get("/insidencias", contentMiddlewareInsidencias, middlewareGetDeleteInsidenciasDTO, getInsidenciasController);
    return router
}

export default getInitRoute