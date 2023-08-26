import { Router } from 'express';
import { deleteAreasController } from '../controllers/deleteDataController.js';
import { middlewareGetDeleteAreasDTO } from '../middleware/middlewareDTO.js';

const deleteInitRoute = () => {
    const router = Router()
    router.delete("/areas", middlewareGetDeleteAreasDTO, deleteAreasController)
    return router
}

export default deleteInitRoute