import { postAreaService } from "../services/postServices.js";

// Areas
const postAreasController = async (req, res, next) => {
    try {
        const { area_nombre } = req.query
        const result = await postAreaService(area_nombre);
        res.status(200).json({ message: `area creada con exito`, result })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export {
    postAreasController
}