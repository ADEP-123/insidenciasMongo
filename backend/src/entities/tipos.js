import { collectionGen, startTransaction } from "../utils/db.js";
import Counters from "./counters.js";
const counter = new Counters()

class Tipos {
    constructor() { }

    async getAllTipos() {
        let session;
        try {
            session = await startTransaction();
            const tipoCollection = await collectionGen("tipo");
            const result = tipoCollection.aggregate([
                {
                    $project: {
                        id: "$tip_id",
                        tipo: "$tip_nombre",
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

    async getTipoById(id) {
        let session;
        try {
            session = await startTransaction();
            const tipoCollection = await collectionGen("tipo");
            const result = tipoCollection.aggregate([
                {
                    $project: {
                        id: "$tip_id",
                        tipo: "$tip_nombre",
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

    async postTipo(nombre) {
        let session;
        try {
            const nuevaSesion = await counter.getNewId("tipo")
            const { newId, session: newSession } = nuevaSesion;
            session = newSession;
            const tipoCollection = await collectionGen("tipo");
            const result = tipoCollection.insertOne(
                {
                    tip_id: newId,
                    tip_nombre: nombre
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

    async putTipo(id, nombre) {
        let session;
        try {
            session = await startTransaction();
            const tipoCollection = await collectionGen("tipo");
            const result = tipoCollection.updateOne(
                {
                    tip_id: id,
                },
                {
                    $set: {
                        tip_nombre: nombre
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

    async deleteTipo(id) {
        let session;
        try {
            session = await startTransaction();
            const tipoCollection = await collectionGen("tipo");
            const result = tipoCollection.deleteOne(
                {
                    tip_id: id
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
export default Tipos;