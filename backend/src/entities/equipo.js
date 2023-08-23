import { collectionGen, startTransaction } from "../utils/db.js";
import Counters from "./counters.js";
const counter = new Counters()

class Equipos {
    constructor() { }

    async getAllEquipos() {
        let session;
        try {
            session = await startTransaction();
            const equipoCollection = await collectionGen("equipo");
            const result = equipoCollection.aggregate([
                {
                    $project: {
                        id: "$id_equipo",
                        tipoId: "$tipo",
                        lugarId: "$lugar",
                        _id: 0
                    }
                }
            ]).toArray();
            await session.commitTransaction();
            return result;
        } catch (error) {
            if (session) {
                await session.abortTransaction();
            }
            throw error;
        } finally {
            if (session) {
                session.endSession();
            }
        }
    }

    async getEquipoById(id) {
        let session;
        try {
            session = await startTransaction();
            const equipoCollection = await collectionGen("equipo");
            const result = equipoCollection.aggregate([
                {
                    $project: {
                        id: "$id_equipo",
                        tipoId: "$tipo",
                        lugarId: "$lugar",
                        _id: 0
                    }
                },
                {
                    $match: { id: id }
                }
            ]).toArray();
            await session.commitTransaction();
            return result;
        } catch (error) {
            if (session) {
                await session.abortTransaction();
            }
            throw error;
        } finally {
            if (session) {
                session.endSession();
            }
        }
    }

    async postEquipo(tipo, lugar) {
        let session;
        try {
            const nuevaSesion = await counter.getNewId("equipo")
            const { newId, session: newSession } = nuevaSesion;
            session = newSession;
            const equipoCollection = await collectionGen("equipo");
            const result = equipoCollection.insertOne(
                {
                    id_equipo: newId,
                    tipo: tipo,
                    lugar: lugar
                }
            );
            await session.commitTransaction();
            return result;
        } catch (error) {
            if (session) {
                await session.abortTransaction();
            }
            throw error;
        } finally {
            if (session) {
                session.endSession();
            }
        }
    }

    async putEquipo(id, tipo, lugar) {
        let session;
        try {
            session = await startTransaction();
            const equipoCollection = await collectionGen("equipo");
            const result = equipoCollection.updateOne(
                {
                    id_equipo: id,
                },
                {
                    $set: {
                        tipo: tipo,
                        lugar: lugar
                    }
                }
            );
            await session.commitTransaction();
            return result;
        } catch (error) {
            if (session) {
                await session.abortTransaction();
            }
            throw error;
        } finally {
            if (session) {
                session.endSession();
            }
        }
    }

    async deleteEquipo(id) {
        let session;
        try {
            session = await startTransaction();
            const equipoCollection = await collectionGen("equipo");
            const result = equipoCollection.deleteOne(
                {
                    id_equipo: id
                }
            );
            await session.commitTransaction();
            return result;
        } catch (error) {
            if (session) {
                await session.abortTransaction();
            }
            throw error;
        } finally {
            if (session) {
                session.endSession();
            }
        }
    }

}
export default Equipos;