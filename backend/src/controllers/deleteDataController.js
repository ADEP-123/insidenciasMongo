import { deleteAreaService } from "../services/deleteServices.js";

// Areas
const deleteAreasController = async (req, res, next) => {
    try {
        const { area_id } = req.query
        const result = await deleteAreaService(area_id);
        res.status(200).json({ message: `area creada con exito`, result })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export {
    deleteAreasController
}