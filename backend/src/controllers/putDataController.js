import { putAreaService } from "../services/putServices.js";

// Areas
const putAreasController = async (req, res, next) => {
    try {
        const { area_id, area_nombre } = req.query
        const result = await putAreaService(area_id, area_nombre);
        res.status(200).json({ message: `area creada con exito`, result })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export {
    putAreasController
}