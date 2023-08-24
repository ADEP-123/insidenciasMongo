import Areas from "../entities/areas.js"
import Categorias from "../entities/categorias.js";
import Equipos from "../entities/equipo.js";
import Insidencias from "../entities/insidencias.js";
import Lugares from "../entities/lugares.js";
import Tipo_equipo from "../entities/tipo_equipo.js";

//Crud areas
const getAllAreasService = async () => {
    const area = new Areas();
    const result = await area.getAllAreas();
    return result
};

const getAreaByIdService = async (id) => {
    const area = new Areas();
    const result = await area.getAreaById(id);
    return result
};

//Crud categorias
const getAllCategoriasService = async () => {
    const categoria = new Categorias();
    const result = await categoria.getAllCategorias();
    return result
};

const getCategoriaByIdService = async (id) => {
    const categoria = new Categorias();
    const result = await categoria.getCategoriaById(id);
    return result
};

//Crud equipos
const getAllEquiposService = async () => {
    const euipo = new Equipos();
    const result = await euipo.getAllEquipos();
    return result
};

const getEquipoByIdService = async (id) => {
    const euipo = new Equipos();
    const result = await euipo.getEquipoById(id);
    return result
};

//Crud insidencias
const getAllInsidenciasService = async () => {
    const insidencia = new Insidencias();
    const result = await insidencia.getAllInsidencias();
    return result
};

const getInsidenciaByIdService = async (id) => {
    const insidencia = new Insidencias();
    const result = await insidencia.getInsidenciaById(id);
    return result
};

//Crud lugares
const getAllLugaresService = async () => {
    const lugar = new Lugares();
    const result = await lugar.getAllLugares();
    return result
};

const getLugarByIdService = async (id) => {
    const lugar = new Lugares();
    const result = await lugar.getLugarById(id);
    return result
};

//Crud tipo_equipo
const getAllTipo_equipoService = async () => {
    const tipoEquipo = new Tipo_equipo();
    const result = await tipoEquipo.getAllTipo_equipo();
    return result
};

const getTipo_equipoByIdService = async (id) => {
    const tipoEquipo = new Tipo_equipo();
    const result = await tipoEquipo.getTipo_equipoById(id);
    return result
};

export {
    getAllAreasService,
    getAreaByIdService,
    getAllCategoriasService,
    getCategoriaByIdService,
    getAllEquiposService,
    getEquipoByIdService,
    getAllInsidenciasService,
    getInsidenciaByIdService,
    getAllLugaresService,
    getLugarByIdService,
    getAllTipo_equipoService,
    getTipo_equipoByIdService
}