var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Expose, Transform } from "class-transformer";
export class insidenciasDTO {
    constructor(data) {
        Object.assign(this, data);
        this.id_insi = 1;
        this.categoria_insi = 1;
        this.tipo_insi = 1;
        this.descr_insi = "FAKE";
        this.fecha_insi = "2023-01-01 01:01:01";
        this.trainer_insi = "1111111111";
        this.equipo_insi = "FA-KE";
    }
}
__decorate([
    Expose({ name: "id" }),
    Transform(({ value, key }) => {
        if (value) {
            if (Math.floor(value)) {
                return value;
            }
            else {
                throw { status: 400, message: `Formato del id incorrecto, debe ser numerico` };
            }
        }
        else {
            return value;
        }
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], insidenciasDTO.prototype, "id_insi", void 0);
__decorate([
    Expose({ name: "categoriaId" }),
    Transform(({ value, key }) => {
        if (value) {
            if (Math.floor(value)) {
                return value;
            }
            else {
                throw { status: 400, message: `Formato del id del lugar incorrecto, debe ser numerico` };
            }
        }
        else {
            throw { status: 400, message: `El id del lugar es obligatorios` };
        }
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], insidenciasDTO.prototype, "categoria_insi", void 0);
__decorate([
    Expose({ name: "tipoId" }),
    Transform(({ value, key }) => {
        if (value) {
            if (Math.floor(value)) {
                return value;
            }
            else {
                throw { status: 400, message: `Formato del id del lugar incorrecto, debe ser numerico` };
            }
        }
        else {
            throw { status: 400, message: `El id del lugar es obligatorios` };
        }
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], insidenciasDTO.prototype, "tipo_insi", void 0);
__decorate([
    Expose({ name: "descripciom" }),
    Transform(({ value, key }) => {
        if (value) {
            return value;
        }
        else {
            throw { status: 400, message: `El nombre de el area es requerido` };
        }
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], insidenciasDTO.prototype, "descr_insi", void 0);
__decorate([
    Expose({ name: "fecha" }),
    Transform(({ value, key }) => {
        if (value) {
            if (/^\d{4}-(0[1-9]|1[0-2])-([0-2][1-9]|3[0-1]) (20|21|22|23|[01]\d|\d):[0-5]\d:[0-5]\d$/.test(value)) {
                return value;
            }
            else {
                throw { status: 400, message: `Formato de la fecha incorrecto, recuerde que el formato esperado es YYYY-MM-DD HH:MM:SS` };
            }
        }
        else {
            throw { status: 400, message: `La fecha y hora de la cita es requerida` };
        }
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], insidenciasDTO.prototype, "fecha_insi", void 0);
__decorate([
    Expose({ name: "trainerId" }),
    Transform(({ value, key }) => {
        if (value) {
            if (/^[0-9]{10}$/.test(value)) {
                return value;
            }
            else {
                throw { status: 400, message: `El formato del documento del trainer debe ser 10 digitos consecutivos` };
            }
        }
        else {
            throw { status: 400, message: `El id del trainer es requerido` };
        }
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], insidenciasDTO.prototype, "trainer_insi", void 0);
__decorate([
    Expose({ name: "equipoId" }),
    Transform(({ value, key }) => {
        if (value) {
            return value;
        }
        else {
            throw { status: 400, message: `El id del equipo es requerido` };
        }
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], insidenciasDTO.prototype, "equipo_insi", void 0);
