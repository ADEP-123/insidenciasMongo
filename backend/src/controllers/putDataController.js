import { putAreaService, putCategoriaService, putEquipoService, putInsidenciaService, putLugarService, putTipoService, putTipo_equipoService, putTrainerService } from "../services/putServices.js";

// Areas
const putAreasController = async (req, res, next) => {
    try {
        const { area_id, area_nombre } = req.query
        const result = await putAreaService(area_id, area_nombre);
        res.status(200).json({ message: `area actualizada con exito`, result })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Categorias
const putCategoriasController = async (req, res, next) => {
    try {
        const { cat_id, cat_nombre } = req.query
        const result = await putCategoriaService(cat_id, cat_nombre);
        res.status(200).json({ message: `categoria actualizada con exito`, result })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Equipo
const putEquipoController = async (req, res, next) => {
    try {
        const { id_equipo, tipo, lugar } = req.query
        const result = await putEquipoService(id_equipo, tipo, lugar);
        res.status(200).json({ message: `Equipo actualizado con exito`, result })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Insidencias
const putInsidenciasController = async (req, res, next) => {
    try {
        const { id_insi, categoria_insi, tipo_insi, descr_insi, fecha_insi, trainer_insi, equipo_insi } = req.query
        const result = await putInsidenciaService(id_insi, categoria_insi, tipo_insi, descr_insi, fecha_insi, trainer_insi, equipo_insi);
        res.status(200).json({ message: `Insidencia actualizada con exito`, result })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Lugares
const putLugaresController = async (req, res, next) => {
    try {
        const { lugar_id, area_lugar, lugar_nombre } = req.query
        const result = await putLugarService(lugar_id, area_lugar, lugar_nombre);
        res.status(200).json({ message: `Lugar actualizado con exito`, result })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// TipoEquipo
const putTipoEquipoController = async (req, res, next) => {
    try {
        const { tip_equip_id, tip_equip_nombre } = req.query
        const result = await putTipo_equipoService(tip_equip_id, tip_equip_nombre);
        res.status(200).json({ message: `tipo equipo actualizado con exito`, result })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Tipos
const putTiposController = async (req, res, next) => {
    try {
        const { tip_id, tip_nombre } = req.query
        const result = await putTipoService(tip_id, tip_nombre);
        res.status(200).json({ message: `Tipo de insidencia actualizada con exito`, result })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Trainer
const putTrainerController = async (req, res, next) => {
    try {
        const { train_id, train_nombre, email_personal, email_corporativo, telefono_movil, telefono_empresa, telefono_residencia, telefono_movil_empresarial } = req.query
        const result = await putTrainerService(train_id, train_nombre, email_personal, email_corporativo, telefono_movil, telefono_empresa, telefono_residencia, telefono_movil_empresarial);
        res.status(200).json({ message: `Trainer actualizado con exito`, result })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export {
    putAreasController,
    putCategoriasController,
    putEquipoController,
    putInsidenciasController,
    putLugaresController,
    putTipoEquipoController,
    putTiposController,
    putTrainerController
}