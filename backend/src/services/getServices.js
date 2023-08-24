import Areas from "../entities/areas.js"

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

export {
    getAllAreasService,
    getAreaByIdService,
    postAreaService,
    putAreaService,
    deleteAreaService
}