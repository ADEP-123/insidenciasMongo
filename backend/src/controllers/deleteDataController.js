import { deleteAreaService, deleteCategoriaService, deleteEquipoService, deleteInsidenciaService } from "../services/deleteServices.js";

// Areas
const deleteAreasController = async (req, res, next) => {
    try {
        const { area_id } = req.query
        const result = await deleteAreaService(area_id);
        res.status(200).json({ message: `categoria eliminada con exito`, result })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Categorias
const deleteCategoriasController = async (req, res, next) => {
    try {
        const { area_id } = req.query
        const result = await deleteCategoriaService(area_id);
        res.status(200).json({ message: `categoria eliminada con exito`, result })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Equipo
const deleteEquipoController = async (req, res, next) => {
    try {
        const { id_equipo } = req.query
        const result = await deleteEquipoService(id_equipo);
        res.status(200).json({ message: `categoria eliminada con exito`, result })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Insidencias
const deleteInsidenciasController = async (req, res, next) => {
    try {
        const { id_insi } = req.query
        const result = await deleteInsidenciaService(id_insi);
        res.status(200).json({ message: `categoria eliminada con exito`, result })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


export {
    deleteAreasController,
    deleteCategoriasController,
    deleteEquipoController,
    deleteInsidenciasController
}