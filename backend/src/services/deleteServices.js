import Areas from "../entities/areas.js"
import Categorias from "../entities/categorias.js";
import Equipos from "../entities/equipo.js";
import Insidencias from "../entities/insidencias.js";
import Lugares from "../entities/lugares.js";

//Crud Areas
const deleteAreaService = async (id) => {
    const area = new Areas();
    const result = await area.deleteArea(id);
    return result
};

//Crud categorias
const deleteCategoriaService = async (id) => {
    const categoria = new Categorias();
    const result = await categoria.deleteCategoria(id);
    return result
};

//Crud equipos
const deleteEquipoService = async (id) => {
    const euipo = new Equipos();
    const result = await euipo.deleteEquipo(id);
    return result
};

//Crud insidencias
const deleteInsidenciaService = async (id) => {
    const insidencia = new Insidencias();
    const result = await insidencia.deleteInsidencia(id);
    return result
};

//Crud lugares
const deleteLugarService = async (id) => {
    const lugar = new Lugares();
    const result = await lugar.deleteLugar(id);
    return result
}

export {
    deleteAreaService,
    deleteCategoriaService,
    deleteEquipoService,
    deleteInsidenciaService,
    deleteLugarService
}