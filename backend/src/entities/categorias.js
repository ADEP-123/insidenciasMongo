import { collectionGen, startTransaction } from "../utils/db.js";
import Counters from "./counters.js";
const counter = new Counters()

class Categorias {
    constructor() { }

    async getAllCategorias() {
        let session;
        try {
            session = await startTransaction();
            const categoriaCollection = await collectionGen("categoria");
            const result = categoriaCollection.aggregate([
                {
                    $project: {
                        id: "$cat_id",
                        categoria: "$cat_nombre",
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

    async getCategoriaById(id) {
        let session;
        try {
            session = await startTransaction();
            const categoriaCollection = await collectionGen("categoria");
            const result = categoriaCollection.aggregate([
                {
                    $project: {
                        id: "$cat_id",
                        categoria: "$cat_nombre",
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

    async postCategoria(nombre) {
        let session;
        try {
            const nuevaSesion = await counter.getNewId("categoria")
            const { newId, session: newSession } = nuevaSesion;
            session = newSession;
            const categoriaCollection = await collectionGen("categoria");
            const result = categoriaCollection.insertOne(
                {
                    cat_id: newId,
                    cat_nombre: nombre
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

    async putCategoria(id, nombre) {
        let session;
        try {
            session = await startTransaction();
            const categoriaCollection = await collectionGen("categoria");
            const result = categoriaCollection.updateOne(
                {
                    cat_id: id,
                },
                {
                    $set: {
                        cat_nombre: nombre
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

    async deleteCategoria(id) {
        let session;
        try {
            session = await startTransaction();
            const categoriaCollection = await collectionGen("categoria");
            const result = categoriaCollection.deleteOne(
                {
                    cat_id: id
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
export default Categorias;