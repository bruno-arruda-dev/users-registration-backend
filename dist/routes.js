"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const createCustomerController_1 = require("./controllers/createCustomerController");
const listCustomersController_1 = require("./controllers/listCustomersController");
const deleteCustomerController_1 = require("./controllers/deleteCustomerController");
function routes(fastify, options) {
    return __awaiter(this, void 0, void 0, function* () {
        fastify.get("/teste", (request, reply) => __awaiter(this, void 0, void 0, function* () {
            return { ok: true };
        }));
        fastify.get("/customers", (request, reply) => __awaiter(this, void 0, void 0, function* () {
            return new listCustomersController_1.ListCustomersController().handle(request, reply);
        }));
        fastify.post("/customer", (request, reply) => __awaiter(this, void 0, void 0, function* () {
            return new createCustomerController_1.CreateCustomerController().handle(request, reply);
        }));
        fastify.delete("/customer", (request, reply) => __awaiter(this, void 0, void 0, function* () {
            return new deleteCustomerController_1.DeleteCustomerController().handle(request, reply);
        }));
    });
}
exports.routes = routes;
