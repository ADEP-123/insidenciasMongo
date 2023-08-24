import Areas from "../entities/areas.js"
import Categorias from "../entities/categorias.js";
import Equipos from "../entities/equipo.js";

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

const postAreaService = async (nombre) => {
    const area = new Areas();
    const result = await area.postArea(nombre);
    return result
};

const putAreaService = async (id, nombre) => {
    const area = new Areas();
    const result = await area.putArea(id, nombre);
    return result
};

const deleteAreaService = async (id) => {
    const area = new Areas();
    const result = await area.deleteArea(id);
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

const postCategoriaService = async (nombre) => {
    const categoria = new Categorias();
    const result = await categoria.postCategoria(nombre);
    return result
};

const putCategoriaService = async (id, nombre) => {
    const categoria = new Categorias();
    const result = await categoria.putCategoria(id, nombre);
    return result
};

const deleteCategoriaService = async (id) => {
    const categoria = new Categorias();
    const result = await categoria.deleteCategoria(id);
    return result
};

//Crud categorias
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

const postEquipoService = async (tipo, lugar) => {
    const euipo = new Equipos();
    const result = await euipo.postEquipo(tipo, lugar);
    return result
};

const putEquipoService = async (id, tipo, lugar) => {
    const euipo = new Equipos();
    const result = await euipo.putEquipo(id, tipo, lugar);
    return result
};

const deleteEquipoService = async (id) => {
    const euipo = new Equipos();
    const result = await euipo.deleteEquipo(id);
    return result
};


export {
    getAllAreasService,
    getAreaByIdService,
    postAreaService,
    putAreaService,
    deleteAreaService,
    getAllCategoriasService,
    getCategoriaByIdService,
    postCategoriaService,
    putCategoriaService,
    deleteCategoriaService,
    getAllEquiposService,
    getEquipoByIdService,
    postEquipoService,
    putEquipoService,
    deleteEquipoService
}