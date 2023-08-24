import { postAreaService, postCategoriaService } from "../services/postServices.js";

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

// Categorias
const postCategoriasController = async (req, res, next) => {
    try {
        const { cat_nombre } = req.query
        const result = await postCategoriaService(cat_nombre);
        res.status(200).json({ message: `categoria creada con exito`, result })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Equipo
const postEquipoController = async (req, res, next) => {
    try {
        const { id_equipo, tipo, lugar } = req.query
        const result = await postCategoriaService(id_equipo, tipo, lugar);
        res.status(200).json({ message: `categoria creada con exito`, result })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


export {
    postAreasController,
    postCategoriasController,
    postEquipoController
}