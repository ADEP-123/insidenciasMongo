import { collectionGen, startTransaction } from "../utils/db.js";
import Counters from "./counters.js";
const counter = new Counters()

class Tipo_equipo {
    constructor() { }

    async getAllTipo_equipo() {
        let session;
        try {
            session = await startTransaction();
            const tipoEquipoCollection = await collectionGen("tipo_equipo");
            const result = tipoEquipoCollection.aggregate([
                {
                    $project: {
                        id: "$tip_equip_id",
                        tipo_equipo: "$tip_equip_nombre",
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

    async getTipo_equipoById(id) {
        let session;
        try {
            session = await startTransaction();
            const tipoEquipoCollection = await collectionGen("tipo_equipo");
            const result = tipoEquipoCollection.aggregate([
                {
                    $project: {
                        id: "$tip_equip_id",
                        tipo_equipo: "$tip_equip_nombre",
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

    async postTipo_equipo(nombre) {
        let session;
        try {
            const nuevaSesion = await counter.getNewId("tipo_equipo")
            const { newId, session: newSession } = nuevaSesion;
            session = newSession;
            const tipoEquipoCollection = await collectionGen("tipo_equipo");
            const result = tipoEquipoCollection.insertOne(
                {
                    tip_equip_id: newId,
                    tip_equip_nombre: nombre
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

    async putTipo_equipo(id, nombre) {
        let session;
        try {
            session = await startTransaction();
            const tipoEquipoCollection = await collectionGen("tipo_equipo");
            const result = tipoEquipoCollection.updateOne(
                {
                    tip_equip_id: id,
                },
                {
                    $set: {
                        tip_equip_nombre: nombre
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

    async deleteTipo_equipo(id) {
        let session;
        try {
            session = await startTransaction();
            const tipoEquipoCollection = await collectionGen("tipo_equipo");
            const result = tipoEquipoCollection.deleteOne(
                {
                    tip_equip_id: id
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
export default Tipo_equipo;