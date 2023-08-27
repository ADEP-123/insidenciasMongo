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
export class trainerDTO {
    constructor(data) {
        Object.assign(this, data);
        this.train_id = 1;
        this.train_nombre = "FAKE";
        this.email_personal = "fake@mail.com";
        this.email_corporativo = "fake@campusland.com";
        this.telefono_movil = "1111111111";
        this.telefono_residencia = "1111111111";
        this.telefono_empresa = "1111111111";
        this.telefono_movil_empresarial = "1111111111";
    }
}
__decorate([
    Expose({ name: "id" }),
    Transform(({ value, key }) => {
        if (value) {
            if (/^[0-9]{10}$/.test(value)) {
                return value;
            }
            else {
                throw { status: 400, message: `Formato del id incorrecto, recuerde que este corresponde al documento de identidad del trainer es decir 10 digitos consecutivos` };
            }
        }
        else {
            return value;
        }
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], trainerDTO.prototype, "train_id", void 0);
__decorate([
    Expose({ name: "nombre" }),
    Transform(({ value, key }) => {
        if (value) {
            return value;
        }
        else {
            throw { status: 400, message: `El nombre del trainer es requerido` };
        }
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], trainerDTO.prototype, "train_nombre", void 0);
__decorate([
    Expose({ name: "emailPers" }),
    Transform(({ value, key }) => {
        if (value) {
            if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) {
                return value;
            }
            else {
                throw { status: 400, message: `Formato del email personal incorrecto formato esperado: algo@dominio.com` };
            }
        }
        else {
            throw { status: 400, message: `Email personal requerido` };
        }
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], trainerDTO.prototype, "email_personal", void 0);
__decorate([
    Expose({ name: "emailCorp" }),
    Transform(({ value, key }) => {
        if (value) {
            if (/^[a-zA-Z0-9._%+-]+@campusland\.com$/.test(value)) {
                return value;
            }
            else {
                throw { status: 400, message: `Formato del email corporativo incorrecto formato esperado: algo@dominio.com` };
            }
        }
        else {
            throw { status: 400, message: `Email corporativo requerido` };
        }
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], trainerDTO.prototype, "email_corporativo", void 0);
__decorate([
    Expose({ name: "telfMov" }),
    Transform(({ value, key }) => {
        if (value) {
            if (/^[0-9]{10}$/.test(value)) {
                return value;
            }
            else {
                throw { status: 400, message: `Formato del telefono movil incorrecto, debe ser 10 digitos consecutivos` };
            }
        }
        else {
            throw { status: 400, message: `El telefono movil es requerido` };
        }
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], trainerDTO.prototype, "telefono_movil", void 0);
__decorate([
    Expose({ name: "telfRes" }),
    Transform(({ value, key }) => {
        if (value) {
            if (/^[0-9]{10}$/.test(value)) {
                return value;
            }
            else {
                throw { status: 400, message: `Formato del telefono residencial incorrecto, debe ser 10 digitos consecutivos` };
            }
        }
        else {
            return value;
        }
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], trainerDTO.prototype, "telefono_residencia", void 0);
__decorate([
    Expose({ name: "telfEmp" }),
    Transform(({ value, key }) => {
        if (value) {
            if (/^[0-9]{10}$/.test(value)) {
                return value;
            }
            else {
                throw { status: 400, message: `Formato del telefono empresarial incorrecto, debe ser 10 digitos consecutivos` };
            }
        }
        else {
            throw { status: 400, message: `El telefono empresarial es requerido` };
        }
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], trainerDTO.prototype, "telefono_empresa", void 0);
__decorate([
    Expose({ name: "telfMovEmp" }),
    Transform(({ value, key }) => {
        if (value) {
            if (/^[0-9]{10}$/.test(value)) {
                return value;
            }
            else {
                throw { status: 400, message: `Formato del telefono movil empresarial incorrecto, debe ser 10 digitos consecutivos` };
            }
        }
        else {
            throw { status: 400, message: `El telefono movil empresarial es requerido` };
        }
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], trainerDTO.prototype, "telefono_movil_empresarial", void 0);
