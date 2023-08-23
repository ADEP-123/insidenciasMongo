import { collectionGen, startTransaction } from "../utils/db.js";
import Counters from "./counters.js";
const counter = new Counters()

class Lugares {
    constructor() { }

    async getAllLugares() {
        let session;
        try {
            session = await startTransaction();
            const lugaresCollection = await collectionGen("lugares");
            const result = lugaresCollection.aggregate([
                {
                    $project: {
                        id: "$lugar_id",
                        lugar: "$lugar_nombre",
                        areaId: "$area_lugar",
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

    async getLugarById(id) {
        let session;
        try {
            session = await startTransaction();
            const lugaresCollection = await collectionGen("lugares");
            const result = lugaresCollection.aggregate([
                {
                    $project: {
                        id: "$lugar_id",
                        lugar: "$lugar_nombre",
                        areaId: "$area_lugar",
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

    async postLugar(nombre, area) {
        let session;
        try {
            const nuevaSesion = await counter.getNewId("lugar")
            const { newId, session: newSession } = nuevaSesion;
            session = newSession;
            const lugaresCollection = await collectionGen("lugares");
            const result = lugaresCollection.insertOne(
                {
                    lugar_id: newId,
                    area_lugar: area,
                    lugar_nombre: nombre
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

    async putLugar(id, area, nombre) {
        let session;
        try {
            session = await startTransaction();
            const lugaresCollection = await collectionGen("lugares");
            const result = lugaresCollection.updateOne(
                {
                    lugar_id: id,
                },
                {
                    $set: {
                        area_lugar: area,
                        lugar_nombre: nombre
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

    async deleteLugar(id) {
        let session;
        try {
            session = await startTransaction();
            const lugaresCollection = await collectionGen("lugares");
            const result = lugaresCollection.deleteOne(
                {
                    lugar_id: id
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
export default Lugares;