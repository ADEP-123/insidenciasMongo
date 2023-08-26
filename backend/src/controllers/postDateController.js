import { getCategoriaByIdService, getEquipoByIdService, getTipoByIdService, getTrainerByIdService } from "../services/getServices.js";
import { postAreaService, postCategoriaService, postEquipoService, postInsidenciaService, postLugarService, postTipoService, postTipo_equipoService, postTrainerService } from "../services/postServices.js";

// Areas
const postAreasController = async (req, res, next) => {
    try {
        const { area_nombre } = req.body
        console.log({ area_nombre });
        const result = await postAreaService(area_nombre);
        res.status(200).json({ message: `area creada con exito`, result })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Categorias
const postCategoriasController = async (req, res, next) => {
    try {
        const { cat_nombre } = req.body
        const result = await postCategoriaService(cat_nombre);
        res.status(200).json({ message: `categoria creada con exito`, result })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Equipo
const postEquipoController = async (req, res, next) => {
    try {
        const { id_equipo, tipo, lugar } = req.body
        const existe = await getEquipoByIdService(id_equipo);
        if (existe.length != 0) {
            res.status(500).json({ error: `El equipo con id: ${id_equipo} ya existe` });
        } else {
            const result = await postEquipoService(id_equipo, tipo, lugar);
            res.status(200).json({ message: `Equipo creado con exito`, result })
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Insidencias
const postInsidenciasController = async (req, res, next) => {
    try {
        const { categoria_insi, tipo_insi, descr_insi, fecha_insi, trainer_insi, equipo_insi } = req.body
        const categoria = await getCategoriaByIdService(categoria_insi);
        const tipo = await getTipoByIdService(tipo_insi);
        const trainer = await getTrainerByIdService(trainer_insi);
        const equipo = await getEquipoByIdService(equipo_insi);
        if (categoria.length == 0) {
            res.status(500).json({ message: `No se encuentra ninguna categoria con ese id` });
        } else if (tipo.length == 0) {
            res.status(500).json({ message: `No se encuentra ningun tipo de insidencia con ese id` });
        } else if (trainer.length == 0) {
            res.status(500).json({ message: `No se encuentra ningun trainer con ese id` });
        } else if (equipo.length == 0) {
            res.status(500).json({ message: `No se encuentra ningun equipo con ese id` });
        } else {
            const result = await postInsidenciaService(categoria_insi, tipo_insi, descr_insi, fecha_insi, trainer_insi, equipo_insi);
            res.status(200).json({ message: `Insidencia creada con exito`, result })
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Lugares
const postLugaresController = async (req, res, next) => {
    try {
        const { area_lugar, lugar_nombre } = req.body
        const result = await postLugarService(area_lugar, lugar_nombre);
        res.status(200).json({ message: `Lugar creado con exito`, result })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// TipoEquipo
const postTipoEquipoController = async (req, res, next) => {
    try {
        const { tip_equip_nombre } = req.body
        const result = await postTipo_equipoService(tip_equip_nombre);
        res.status(200).json({ message: `Tipo equipo creado con exito`, result })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Tipos
const postTiposController = async (req, res, next) => {
    try {
        const { tip_nombre } = req.body
        const result = await postTipoService(tip_nombre);
        res.status(200).json({ message: `Tipo de insidencia creada con exito`, result })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Trainer
const postTrainerController = async (req, res, next) => {
    try {
        const { train_id, train_nombre, email_personal, email_corporativo, telefono_movil, telefono_empresa, telefono_residencia, telefono_movil_empresarial } = req.body
        const existe = await getTrainerByIdService(train_id)
        if (existe.length != 0) {
            res.status(500).json({ error: `El trainer con id: ${train_id} ya existe` });
        } else {
            const result = await postTrainerService(train_id, train_nombre, email_personal, email_corporativo, telefono_movil, telefono_empresa, telefono_residencia, telefono_movil_empresarial);
            res.status(200).json({ message: `Trainer creado con exito`, result })
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export {
    postAreasController,
    postCategoriasController,
    postEquipoController,
    postInsidenciasController,
    postLugaresController,
    postTipoEquipoController,
    postTiposController,
    postTrainerController
}