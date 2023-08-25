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
export class equipoDTO {
    constructor(data) {
        Object.assign(this, data);
        this.id_equipo = 1;
        this.tipo = 1;
        this.lugar = 1;
    }
}
__decorate([
    Expose({ name: "id" }),
    Transform(({ value, key }) => {
        if (value) {
            return value;
        }
        else {
            return value;
        }
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], equipoDTO.prototype, "id_equipo", void 0);
__decorate([
    Expose({ name: "tipoId" }),
    Transform(({ value, key }) => {
        if (value) {
            if (Math.floor(value)) {
                return value;
            }
            else {
                throw { status: 400, message: `Formato del id del tipo incorrecto, debe ser numerico` };
            }
        }
        else {
            throw { status: 400, message: `El id del tipo es obligatorios` };
        }
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], equipoDTO.prototype, "tipo", void 0);
__decorate([
    Expose({ name: "lugarId" }),
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
], equipoDTO.prototype, "lugar", void 0);
