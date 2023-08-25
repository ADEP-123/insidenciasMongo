import 'reflect-metadata';
import { plainToClass } from 'class-transformer';
//post put middlewares
import { areasDTO } from '../routes/dto/js/areas.js';
import { categoriasDTO } from '../routes/dto/js/categorias.js';
import { equipoDTO } from '../routes/dto/js/equipo.js';
import { insidenciasDTO } from '../routes/dto/js/insidencias.js';
import { lugaresDTO } from '../routes/dto/js/lugares.js';
import { tipo_equipoDTO } from '../routes/dto/js/tipo_equipo.js';
import { tiposDTO } from '../routes/dto/js/tipos.js';
import { trainerDTO } from '../routes/dto/js/trainer.js';
//get delete middlewares
import { getDeleteAreasDTO } from '../routes/dto/js/getDeleteAreas.js';
import { getDeleteCategoriasDTO } from '../routes/dto/js/getDeleteCategorias.js';
import { getDeleteEquipoDTO } from '../routes/dto/js/getDeleteEquipo.js';
import { getDeleteInsidenciasDTO } from '../routes/dto/js/getDeleteInsidencias.js';
import { getDeletelugaresDTO } from '../routes/dto/js/getDeleteLugares.js';
import { getDeleteTipo_equipoDTO } from '../routes/dto/js/getDeleteTipo_equipo.js';
import { getDeletetiposDTO } from '../routes/dto/js/getDeleteTipos.js';
import { getDeleteTrainerDTO } from '../routes/dto/js/getDeleteTrainer.js';


//post put middlewares
const middlewarePostPutAreasDTO = ((req, res, next) => {
    try {
        let data = plainToClass(areasDTO, req.body, { excludeExtraneousValues: true });
       req.body = JSON.parse(JSON.stringify(data));
        next()
    } catch (err) {
        res.status(err.status).send(err)
    }
});

const middlewarePostPutCategoriasDTO = ((req, res, next) => {
    try {
        let data = plainToClass(categoriasDTO,req.body, { excludeExtraneousValues: true });
       req.body = JSON.parse(JSON.stringify(data));
        next()
    } catch (err) {
        res.status(err.status).send(err)
    }
});

const middlewarePostPutEquipoDTO = ((req, res, next) => {
    try {
        let data = plainToClass(equipoDTO,req.body, { excludeExtraneousValues: true });
       req.body = JSON.parse(JSON.stringify(data));
        next()
    } catch (err) {
        res.status(err.status).send(err)
    }
});

const middlewarePostPutInsidenciasDTO = ((req, res, next) => {
    try {
        let data = plainToClass(insidenciasDTO,req.body, { excludeExtraneousValues: true });
       req.body = JSON.parse(JSON.stringify(data));
        next()
    } catch (err) {
        res.status(err.status).send(err)
    }
});

const middlewarePostPutLugaresDTO = ((req, res, next) => {
    try {
        let data = plainToClass(lugaresDTO,req.body, { excludeExtraneousValues: true });
       req.body = JSON.parse(JSON.stringify(data));
        next()
    } catch (err) {
        res.status(err.status).send(err)
    }
});

const middlewarePostPutTipoEquipoDTO = ((req, res, next) => {
    try {
        let data = plainToClass(tipo_equipoDTO,req.body, { excludeExtraneousValues: true });
       req.body = JSON.parse(JSON.stringify(data));
        next()
    } catch (err) {
        res.status(err.status).send(err)
    }
});

const middlewarePostPutTiposDTO = ((req, res, next) => {
    try {
        let data = plainToClass(tiposDTO,req.body, { excludeExtraneousValues: true });
       req.body = JSON.parse(JSON.stringify(data));
        next()
    } catch (err) {
        res.status(err.status).send(err)
    }
});

const middlewarePostPutTrainerDTO = ((req, res, next) => {
    try {
        let data = plainToClass(trainerDTO,req.body, { excludeExtraneousValues: true });
       req.body = JSON.parse(JSON.stringify(data));
        next()
    } catch (err) {
        res.status(err.status).send(err)
    }
});


//get delete middlewares
const middlewareGetDeleteAreasDTO = ((req, res, next) => {
    try {
        let data = plainToClass(getDeleteAreasDTO, req.query, { excludeExtraneousValues: true });
        req.query = JSON.parse(JSON.stringify(data));
        next()
    } catch (err) {
        res.status(err.status).send(err)
    }
});

const middlewareGetDeleteCategoriasDTO = ((req, res, next) => {
    try {
        let data = plainToClass(getDeleteCategoriasDTO, req.query, { excludeExtraneousValues: true });
        req.query = JSON.parse(JSON.stringify(data));
        next()
    } catch (err) {
        res.status(err.status).send(err)
    }
});

const middlewareGetDeleteEquipoDTO = ((req, res, next) => {
    try {
        let data = plainToClass(getDeleteEquipoDTO, req.query, { excludeExtraneousValues: true });
        req.query = JSON.parse(JSON.stringify(data));
        next()
    } catch (err) {
        res.status(err.status).send(err)
    }
});

const middlewareGetDeleteInsidenciasDTO = ((req, res, next) => {
    try {
        let data = plainToClass(getDeleteInsidenciasDTO, req.query, { excludeExtraneousValues: true });
        req.query = JSON.parse(JSON.stringify(data));
        next()
    } catch (err) {
        res.status(err.status).send(err)
    }
});

const middlewareGetDeleteLugaresDTO = ((req, res, next) => {
    try {
        let data = plainToClass(getDeletelugaresDTO, req.query, { excludeExtraneousValues: true });
        req.query = JSON.parse(JSON.stringify(data));
        next()
    } catch (err) {
        res.status(err.status).send(err)
    }
});

const middlewareGetDeleteTipoEquipoDTO = ((req, res, next) => {
    try {
        let data = plainToClass(getDeleteTipo_equipoDTO, req.query, { excludeExtraneousValues: true });
        req.query = JSON.parse(JSON.stringify(data));
        next()
    } catch (err) {
        res.status(err.status).send(err)
    }
});

const middlewareGetDeleteTiposDTO = ((req, res, next) => {
    try {
        let data = plainToClass(getDeletetiposDTO, req.query, { excludeExtraneousValues: true });
        req.query = JSON.parse(JSON.stringify(data));
        next()
    } catch (err) {
        res.status(err.status).send(err)
    }
});

const middlewareGetDeleteTrainerDTO = ((req, res, next) => {
    try {
        let data = plainToClass(getDeleteTrainerDTO, req.query, { excludeExtraneousValues: true });
        req.query = JSON.parse(JSON.stringify(data));
        next()
    } catch (err) {
        res.status(err.status).send(err)
    }
});

export {
    middlewarePostPutAreasDTO,
    middlewarePostPutCategoriasDTO,
    middlewarePostPutEquipoDTO,
    middlewarePostPutInsidenciasDTO,
    middlewarePostPutLugaresDTO,
    middlewarePostPutTipoEquipoDTO,
    middlewarePostPutTiposDTO,
    middlewarePostPutTrainerDTO,
    middlewareGetDeleteAreasDTO,
    middlewareGetDeleteCategoriasDTO,
    middlewareGetDeleteEquipoDTO,
    middlewareGetDeleteInsidenciasDTO,
    middlewareGetDeleteLugaresDTO,
    middlewareGetDeleteTipoEquipoDTO,
    middlewareGetDeleteTiposDTO,
    middlewareGetDeleteTrainerDTO
}