import { collectionGen, startTransaction } from "../utils/db.js";
import Counters from "./counters.js";
const counter = new Counters()

class Areas {
    constructor() { }

    async getAllAreas() {
        let session;
        try {
            session = await startTransaction();
            const areasCollection = await collectionGen("areas");
            const result = areasCollection.aggregate([
                {
                    $project: {
                        id: "$area_id",
                        area: "$area_nombre",
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

    async getAreaById(id) {
        let session;
        try {
            session = await startTransaction();
            const areasCollection = await collectionGen("areas");
            const result = areasCollection.aggregate([
                {
                    $project: {
                        id: "$area_id",
                        area: "$area_nombre",
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

    async postArea(nombre) {
        let session;
        try {
            const nuevaSesion = await counter.getNewId("areas")
            const { newId, session: newSession } = nuevaSesion;
            session = newSession;
            const areasCollection = await collectionGen("areas");
            const result = areasCollection.insertOne(
                {
                    area_id: newId,
                    area_nombre: nombre
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

    async putArea(id, nombre) {
        let session;
        try {
            session = await startTransaction();
            const areasCollection = await collectionGen("areas");
            const result = areasCollection.updateOne(
                {
                    area_id: id,
                },
                {
                    $set: {
                        area_nombre: nombre
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

    async deleteArea(id) {
        let session;
        try {
            session = await startTransaction();
            const areasCollection = await collectionGen("areas");
            const result = areasCollection.deleteOne(
                {
                    area_id: id
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
export default Areas;