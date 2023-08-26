import { deleteAreaService, deleteCategoriaService, deleteEquipoService, deleteInsidenciaService, deleteTipoService, deleteTipo_equipoService, deleteTrainerService } from "../services/deleteServices.js";

// Areas
const deleteAreasController = async (req, res, next) => {
    try {
        const { area_id } = req.query
        const result = await deleteAreaService(Number(area_id));
        if (result.deletedCount == 0) {
            res.status(200).json({ message: `no se ha encontrado ningun area con ese id`, result })
        } else {
            res.status(200).json({ message: `area eliminada con exito`, result })
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Categorias
const deleteCategoriasController = async (req, res, next) => {
    try {
        const { cat_id } = req.query
        const result = await deleteCategoriaService(Number(cat_id));
        if (result.deletedCount == 0) {
            res.status(500).json({ message: `no se ha encontrado ninguna categoria con ese id`, result })
        } else {
            res.status(200).json({ message: `categoria eliminada con exito`, result })
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Equipo
const deleteEquipoController = async (req, res, next) => {
    try {
        const { id_equipo } = req.query
        const result = await deleteEquipoService(Number(id_equipo));
        if (result.deletedCount == 0) {
            res.status(500).json({ message: `no se ha encontrado ninguna equipo con ese id`, result })
        } else {
            res.status(200).json({ message: `Equipo eliminado con exito`, result })
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Insidencias
const deleteInsidenciasController = async (req, res, next) => {
    try {
        const { id_insi } = req.query
        const result = await deleteInsidenciaService(Number(id_insi));
        if (result.deletedCount == 0) {
            res.status(500).json({ message: `no se ha encontrado ninguna insidencia con ese id`, result })
        } else {
            res.status(200).json({ message: `Insidencia eliminada con exito`, result })
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Lugares
const deleteLugaresController = async (req, res, next) => {
    try {
        const { lugar_id } = req.query
        const result = await deleteLugaresController(Number(lugar_id));
        if (result.deletedCount == 0) {
            res.status(500).json({ message: `no se ha encontrado ningun lugar con ese id`, result })
        } else {
            res.status(200).json({ message: `Lugar eliminado con exito`, result })
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// TipoEquipo
const deleteTipoEquipoController = async (req, res, next) => {
    try {
        const { tip_equip_id } = req.query
        const result = await deleteTipo_equipoService(Number(tip_equip_id));
        if (result.deletedCount == 0) {
            res.status(500).json({ message: `no se ha encontrado ningun tipo de equipo con ese id`, result })
        } else {
            res.status(200).json({ message: `Tipo de equipo eliminado con exito`, result })
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Tipos
const deleteTiposController = async (req, res, next) => {
    try {
        const { tip_id } = req.query
        const result = await deleteTipoService(Number(tip_id));
        if (result.deletedCount == 0) {
            res.status(500).json({ message: `no se ha encontrado ningun tipo de insidencia con ese id`, result })
        } else {
            res.status(200).json({ message: `tipo de insidencia eliminado con exito`, result })
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Trainer
const deleteTrainerController = async (req, res, next) => {
    try {
        const { train_id } = req.query
        const result = await deleteTrainerService(Number(train_id));
        if (result.deletedCount == 0) {
            res.status(500).json({ message: `no se ha encontrado ningun trainer con ese id`, result })
        } else {
            res.status(200).json({ message: `trainer eliminado con exito`, result })
        }
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