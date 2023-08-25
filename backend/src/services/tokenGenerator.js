import 'reflect-metadata';
import { plainToClass, classToPlain } from 'class-transformer';
import dotenv from 'dotenv';
import { Router } from 'express';
import { SignJWT } from 'jose';
import { areasDTO } from '../routes/dto/js/areas.js';
import { categoriasDTO } from '../routes/dto/js/categorias.js';
import { equipoDTO } from '../routes/dto/js/equipo.js';
import { insidenciasDTO } from '../routes/dto/js/insidencias.js';
import { lugaresDTO } from '../routes/dto/js/lugares.js';
import { tipo_equipoDTO } from '../routes/dto/js/tipo_equipo.js';
import { tiposDTO } from '../routes/dto/js/tipos.js';
import { trainerDTO } from '../routes/dto/js/trainer.js';

dotenv.config();
const appToken = Router();

appToken.use("/:coleccion", async (req, res) => {
    try {
        let inst = plainToClass(eval(`${req.params.coleccion}DTO`), {}, { ignoreDecorators: true })
        const encoder = new TextEncoder();
        const entidadDTO = { entidad: `${req.params.coleccion}DTO` }
        const jwtconstructor = new SignJWT(Object.assign({}, Object.assign(classToPlain(inst), entidadDTO)));
        // console.log(jwtconstructor);
        const jwt = await jwtconstructor
            .setProtectedHeader({ alg: "HS256", typ: "JWT" })
            .setIssuedAt()
            .setExpirationTime("60h")
            .sign(encoder.encode(process.env.JWT_PRIVATE_KEY));
        req.data = jwt;
        res.status(201).send({ status: 201, message: jwt });
    } catch (error) {
        // console.log(error);
        res.status(404).send({ status: 404, message: `${req.params.coleccion} no es una opcion valida para generar el token, porfavor revisar la lista que se provee en el readme` });
    }
})

export {
    appToken,
};