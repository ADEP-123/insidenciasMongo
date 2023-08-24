import Areas from "../entities/areas.js"
import Categorias from "../entities/categorias.js";
import Equipos from "../entities/equipo.js";
import Insidencias from "../entities/insidencias.js";

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
};;

export {
    getAllAreasService,
    getAreaByIdService,
    getAllCategoriasService,
    getCategoriaByIdService,
    getAllEquiposService,
    getEquipoByIdService,
    getAllInsidenciasService,
    getInsidenciaByIdService
}