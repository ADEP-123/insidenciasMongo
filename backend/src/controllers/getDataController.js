import { getAllAreasService, getAreaByIdService } from "../services/getServices.js";

// Areas
const getAreasController = async (req, res, next) => {
    try {
        let result;
        const { area_id } = req.query
        if (area_id) {
            result = await getAreaByIdService(area_id);
        } else {
            result = await getAllAreasService();
        }
        res.status(200).json({ message: `se han encontrado ${result.length} resultados`, result })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export {
    getAreasController
}

