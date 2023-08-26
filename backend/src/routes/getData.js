import { Router } from 'express';
import { getAreasController } from '../controllers/getDataController.js';
import { middlewareGetDeleteAreasDTO } from '../middleware/middlewareDTO.js';

const getInitRoute = () => {
    const router = Router()
    router.get("/areas", middlewareGetDeleteAreasDTO, getAreasController)
    return router
}

export default getInitRoute