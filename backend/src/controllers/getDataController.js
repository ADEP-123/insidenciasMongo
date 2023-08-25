import { getAllAreasService, getAllCategoriasService, getAllEquiposService, getAllInsidenciasService, getAllLugaresService, getAllTipo_equipoService, getAllTiposService, getAllTrainersService, getAreaByIdService, getCategoriaByIdService, getEquipoByIdService, getInsidenciaByIdService, getLugarByIdService, getTipoByIdService, getTipo_equipoByIdService, getTrainerByIdService } from "../services/getServices.js";

// Areas
const getAreasController = async (req, res, next) => {
    try {
        let result;
        const { area_id } = req.query
        if (area_id) {
            result = await getAreaByIdService(Number(area_id));
        } else {
            result = await getAllAreasService();
        }
        res.status(200).json({ message: `se han encontrado ${result.length} resultados`, result })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Categorias
const getCategoriasController = async (req, res, next) => {
    try {
        let result;
        const { cat_id } = req.query
        if (cat_id) {
            result = await getCategoriaByIdService(Number(cat_id));
        } else {
            result = await getAllCategoriasService();
        }
        res.status(200).json({ message: `se han encontrado ${result.length} resultados`, result })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Equipo
const getEquipoController = async (req, res, next) => {
    try {
        let result;
        const { id_equipo } = req.query
        if (id_equipo) {
            result = await getEquipoByIdService(id_equipo);
        } else {
            result = await getAllEquiposService();
        }
        res.status(200).json({ message: `se han encontrado ${result.length} resultados`, result })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Insidencias
const getInsidenciasController = async (req, res, next) => {
    try {
        let result;
        const { id_equipo } = req.query
        if (id_equipo) {
            result = await getInsidenciaByIdService(Number(id_equipo));
        } else {
            result = await getAllInsidenciasService();
        }
        res.status(200).json({ message: `se han encontrado ${result.length} resultados`, result })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Lugares
const getLugaresController = async (req, res, next) => {
    try {
        let result;
        const { lugar_id } = req.query
        if (lugar_id) {
            result = await getLugarByIdService(Number(lugar_id));
        } else {
            result = await getAllLugaresService();
        }
        res.status(200).json({ message: `se han encontrado ${result.length} resultados`, result })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// TipoEquipo
const getTipoEquipoController = async (req, res, next) => {
    try {
        let result;
        const { tip_equip_id } = req.query
        if (tip_equip_id) {
            result = await getTipo_equipoByIdService(Number(tip_equip_id));
        } else {
            result = await getAllTipo_equipoService();
        }
        res.status(200).json({ message: `se han encontrado ${result.length} resultados`, result })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Tipos
const getTiposController = async (req, res, next) => {
    try {
        let result;
        const { tip_id } = req.query
        if (tip_id) {
            result = await getTipoByIdService(Number(tip_id));
        } else {
            result = await getAllTiposService();
        }
        res.status(200).json({ message: `se han encontrado ${result.length} resultados`, result })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Trainer
const getTrainerController = async (req, res, next) => {
    try {
        let result;
        const { train_id } = req.query
        if (train_id) {
            result = await getTrainerByIdService(train_id);
        } else {
            result = await getAllTrainersService();
        }
        res.status(200).json({ message: `se han encontrado ${result.length} resultados`, result })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export {
    getAreasController,
    getCategoriasController,
    getEquipoController,
    getInsidenciasController,
    getLugaresController,
    getTipoEquipoController,
    getTiposController,
    getTrainerController
}

