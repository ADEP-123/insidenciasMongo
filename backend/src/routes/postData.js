import { Router } from 'express';
import { postAreasController } from '../controllers/postDateController.js';
import { middlewarePostPutAreasDTO } from '../middleware/middlewareDTO.js';

const postInitRoute = () => {
    const router = Router()
    router.post("/areas", middlewarePostPutAreasDTO, postAreasController)
    return router
}

export default postInitRoute