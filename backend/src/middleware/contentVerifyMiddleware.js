import 'reflect-metadata';
import { plainToClass, classToPlain } from 'class-transformer';
import { areasDTO } from '../routes/dto/js/areas.js';
import { categoriasDTO } from '../routes/dto/js/categorias.js';
import { equipoDTO } from '../routes/dto/js/equipo.js';
import { insidenciasDTO } from '../routes/dto/js/insidencias.js';
import { lugaresDTO } from '../routes/dto/js/lugares.js';
import { tipo_equipoDTO } from '../routes/dto/js/tipo_equipo.js';
import { tiposDTO } from '../routes/dto/js/tipos.js';
import { trainerDTO } from '../routes/dto/js/trainer.js';

const contentMiddleware = (req, res, next) => {
    let { payload } = req.data;
    const { iat, exp, ...newPayload } = payload;
    const { entidad, ...finalPayload } = newPayload;
    payload = finalPayload;
    // console.log("finalPayload: ", finalPayload);
    // console.log(entidad);
    let Clone = JSON.stringify(classToPlain(plainToClass(eval(entidad), {}, { ignoreDecorators: true })));
    // console.log("Clone: ", Clone);
    let Verify = Clone === JSON.stringify(payload);
    (!Verify) ? res.status(406).send({ status: 406, message: "No Autorizado" }) : next();
};


export {
    contentMiddleware
}