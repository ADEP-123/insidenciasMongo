import { deleteAreaService, deleteCategoriaService, deleteEquipoService, deleteInsidenciaService, deleteTipoService, deleteTipo_equipoService, deleteTrainerService } from "../services/deleteServices.js";

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
        res.status(200).json({ message: `Equipo eliminado con exito`, result })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Insidencias
const deleteInsidenciasController = async (req, res, next) => {
    try {
        const { id_insi } = req.query
        const result = await deleteInsidenciaService(id_insi);
        res.status(200).json({ message: `Insidencia eliminada con exito`, result })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Lugares
const deleteLugaresController = async (req, res, next) => {
    try {
        const { lugar_id } = req.query
        const result = await deleteLugaresController(lugar_id);
        res.status(200).json({ message: `Lugar eliminado con exito`, result })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// TipoEquipo
const deleteTipoEquipoController = async (req, res, next) => {
    try {
        const { tip_equip_id } = req.query
        const result = await deleteTipo_equipoService(tip_equip_id);
        res.status(200).json({ message: `Tipo de equipo eliminado con exito`, result })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Tipos
const deleteTiposController = async (req, res, next) => {
    try {
        const { tip_id } = req.query
        const result = await deleteTipoService(tip_id);
        res.status(200).json({ message: `tipo de insidencia eliminado con exito`, result })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Trainer
const deleteTrainerController = async (req, res, next) => {
    try {
        const { train_id } = req.query
        const result = await deleteTrainerService(train_id);
        res.status(200).json({ message: `trainer eliminado con exito`, result })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export {
    deleteAreasController,
    deleteCategoriasController,
    deleteEquipoController,
    deleteInsidenciasController,
    deleteLugaresController,
    deleteTipoEquipoController,
    deleteTiposController,
    deleteTrainerController
}