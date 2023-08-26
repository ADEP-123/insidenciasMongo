import { Router } from 'express';
import { putAreasController } from '../controllers/putDataController.js';
import { middlewarePostPutAreasDTO } from '../middleware/middlewareDTO.js';

const putInitRoute = () => {
    const router = Router()
    router.put("/areas", middlewarePostPutAreasDTO, putAreasController)
    return router
}

export default putInitRoute