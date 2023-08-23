import { collectionGen, startTransaction } from "../utils/db.js";
import Counters from "./counters.js";
const counter = new Counters()

class Insidencias {
    constructor() { }

    async getAllInsidencias() {
        let session;
        try {
            session = await startTransaction();
            const InsidenciasCollection = await collectionGen("insidencias");
            const result = InsidenciasCollection.aggregate([
                {
                    $project: {
                        id: "$id_insi",
                        categoriaId: "$categoria_insi",
                        tipoId: "$tipo_insi",
                        descripciom: "$descr_insi",
                        fecha: "$fecha_insi",
                        trainerId: "$trainer_insi",
                        equipoId: "$equipo_insi",
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

    async getInsidenciaById(id) {
        let session;
        try {
            session = await startTransaction();
            const InsidenciasCollection = await collectionGen("insidencias");
            const result = InsidenciasCollection.aggregate([
                {
                    $project: {
                        id: "$id_insi",
                        categoriaId: "$categoria_insi",
                        tipoId: "$tipo_insi",
                        descripciom: "$descr_insi",
                        fecha: "$fecha_insi",
                        trainerId: "$trainer_insi",
                        equipoId: "$equipo_insi",
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

    async postInsidencia(categoriaId, tipoId, descripciom, fecha, trainerId, equipoId) {
        let session;
        try {
            const nuevaSesion = await counter.getNewId("equipo")
            const { newId, session: newSession } = nuevaSesion;
            session = newSession;
            const InsidenciasCollection = await collectionGen("insidencias");
            const result = InsidenciasCollection.insertOne(
                {
                    id_insi: newId,
                    categoria_insi: categoriaId,
                    tipo_insi: tipoId,
                    descr_insi: descripciom,
                    fecha_insi: fecha,
                    trainer_insi: trainerId,
                    equipo_insi: equipoId
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

    async putInsidencia(id, categoriaId, tipoId, descripciom, fecha, trainerId, equipoId) {
        let session;
        try {
            session = await startTransaction();
            const InsidenciasCollection = await collectionGen("insidencias");
            const result = InsidenciasCollection.updateOne(
                {
                    id_insi: id,
                },
                {
                    $set: {
                        categoria_insi: categoriaId,
                        tipo_insi: tipoId,
                        descr_insi: descripciom,
                        fecha_insi: fecha,
                        trainer_insi: trainerId,
                        equipo_insi: equipoId
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

    async deleteInsidencia(id) {
        let session;
        try {
            session = await startTransaction();
            const InsidenciasCollection = await collectionGen("insidencias");
            const result = InsidenciasCollection.deleteOne(
                {
                    id_insi: id
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
export default Insidencias;