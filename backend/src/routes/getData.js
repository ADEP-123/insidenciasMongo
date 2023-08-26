import { Router } from 'express';
import { getAreasController, getCategoriasController, getEquipoController } from '../controllers/getDataController.js';
import { middlewareGetDeleteAreasDTO, middlewareGetDeleteCategoriasDTO, middlewareGetDeleteEquipoDTO } from '../middleware/middlewareDTO.js';
import { contentMiddlewareAreas, contentMiddlewareCategorias, contentMiddlewareEquipo } from "../middleware/contentVerifyMiddleware.js";


const getInitRoute = () => {
    const router = Router();
    router.get("/areas", contentMiddlewareAreas, middlewareGetDeleteAreasDTO, getAreasController);
    router.get("/categorias", contentMiddlewareCategorias, middlewareGetDeleteCategoriasDTO, getCategoriasController);
    router.get("/equipo", contentMiddlewareEquipo, middlewareGetDeleteEquipoDTO, getEquipoController);
    return router
}

export default getInitRoute