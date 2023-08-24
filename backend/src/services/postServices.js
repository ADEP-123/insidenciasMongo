import Areas from "../entities/areas.js"
import Categorias from "../entities/categorias.js";
import Equipos from "../entities/equipo.js";
import Insidencias from "../entities/insidencias.js";

//Crud Areas
const postAreaService = async (nombre) => {
    const area = new Areas();
    const result = await area.postArea(nombre);
    return result
};

//Crud categorias
const postCategoriaService = async (nombre) => {
    const categoria = new Categorias();
    const result = await categoria.postCategoria(nombre);
    return result
};

//Crud equipos
const postEquipoService = async (tipo, lugar) => {
    const euipo = new Equipos();
    const result = await euipo.postEquipo(tipo, lugar);
    return result
};

//Crud insidencias
const postInsidenciaService = async (categoriaId, tipoId, descripciom, fecha, trainerId, equipoId) => {
    const insidencia = new Insidencias();
    const result = await insidencia.postInsidencia(categoriaId, tipoId, descripciom, fecha, trainerId, equipoId);
    return result
};

export {
    postAreaService,
    postCategoriaService,
    postEquipoService,
    postInsidenciaService
}