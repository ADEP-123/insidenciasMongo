import Areas from "../entities/areas.js"
import Categorias from "../entities/categorias.js";
import Equipos from "../entities/equipo.js";
import Insidencias from "../entities/insidencias.js";
import Lugares from "../entities/lugares.js";
import Tipo_equipo from "../entities/tipo_equipo.js";
import Tipos from "../entities/tipos.js";
import Trainers from "../entities/trainer.js";

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
};

//Crud tipo_equipo
const deleteTipo_equipoService = async (id) => {
    const tipoEquipo = new Tipo_equipo();
    const result = await tipoEquipo.deleteTipo_equipo(id);
    return result
};

//Crud tipos
const deleteTipoService = async (id) => {
    const tipo = new Tipos();
    const result = await tipo.deleteTipo(id);
    return result
};

//Crud trainer
const deleteTrainerService = async (id) => {
    const trainer = new Trainers();
    const result = await trainer.putTrainer(id, nombre, emailPers, emailCorp, telfMov, telfRes, telfEmp, telfMovEmp);
    return result
};

export {
    deleteAreaService,
    deleteCategoriaService,
    deleteEquipoService,
    deleteInsidenciaService,
    deleteLugarService,
    deleteTipo_equipoService,
    deleteTipoService,
    deleteTrainerService
}