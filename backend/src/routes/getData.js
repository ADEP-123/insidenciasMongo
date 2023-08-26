import { Router } from 'express';
import { getAreasController, getCategoriasController, getEquipoController, getInsidenciasController, getLugaresController, getTipoEquipoController, getTiposController } from '../controllers/getDataController.js';
import { middlewareGetDeleteAreasDTO, middlewareGetDeleteCategoriasDTO, middlewareGetDeleteEquipoDTO, middlewareGetDeleteInsidenciasDTO, middlewareGetDeleteLugaresDTO, middlewareGetDeleteTipoEquipoDTO, middlewareGetDeleteTiposDTO } from '../middleware/middlewareDTO.js';
import { contentMiddlewareAreas, contentMiddlewareCategorias, contentMiddlewareEquipo, contentMiddlewareInsidencias, contentMiddlewareLugares, contentMiddlewareTipo, contentMiddlewareTipoEquipo } from "../middleware/contentVerifyMiddleware.js";


const getInitRoute = () => {
    const router = Router();
    router.get("/areas", contentMiddlewareAreas, middlewareGetDeleteAreasDTO, getAreasController);
    router.get("/categorias", contentMiddlewareCategorias, middlewareGetDeleteCategoriasDTO, getCategoriasController);
    router.get("/equipo", contentMiddlewareEquipo, middlewareGetDeleteEquipoDTO, getEquipoController);
    router.get("/insidencias", contentMiddlewareInsidencias, middlewareGetDeleteInsidenciasDTO, getInsidenciasController);
    router.get("/lugares", contentMiddlewareLugares, middlewareGetDeleteLugaresDTO, getLugaresController);
    router.get("/tipo_equipo", contentMiddlewareTipoEquipo, middlewareGetDeleteTipoEquipoDTO, getTipoEquipoController);
    router.get("/tipos", contentMiddlewareTipo, middlewareGetDeleteTiposDTO, getTiposController);
    return router
}

export default getInitRoute