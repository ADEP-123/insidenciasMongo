import Areas from "../entities/areas.js"
import Categorias from "../entities/categorias.js";
import Equipos from "../entities/equipo.js";
import Insidencias from "../entities/insidencias.js";
import Lugares from "../entities/lugares.js";

//Crud Areas
const putAreaService = async (id, nombre) => {
    const area = new Areas();
    const result = await area.putArea(id, nombre);
    return result
};

//Crud categorias
const putCategoriaService = async (id, nombre) => {
    const categoria = new Categorias();
    const result = await categoria.putCategoria(id, nombre);
    return result
};

//Crud equipos
const putEquipoService = async (id, tipo, lugar) => {
    const euipo = new Equipos();
    const result = await euipo.putEquipo(id, tipo, lugar);
    return result
};

//Crud insidencias
const putInsidenciaService = async (id, categoriaId, tipoId, descripciom, fecha, trainerId, equipoId) => {
    const insidencia = new Insidencias();
    const result = await insidencia.putInsidencia(id, categoriaId, tipoId, descripciom, fecha, trainerId, equipoId);
    return result
};

//Crud lugares
const putLugarService = async (id, nombre, area) => {
    const lugar = new Lugares();
    const result = await lugar.putLugar(id, nombre, area);
    return result
}

export {
    putAreaService,
    putCategoriaService,
    putEquipoService,
    putInsidenciaService,
    putLugarService
}