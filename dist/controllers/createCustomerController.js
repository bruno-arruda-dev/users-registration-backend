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
exports.CreateCustomerController = void 0;
const createCustomerService_1 = require("../services/createCustomerService");
class CreateCustomerController {
    handle(request, reply) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, email } = request.body;
            const costumerService = new createCustomerService_1.CreateCustomerService();
            const costumer = yield costumerService.execute({ name, email });
            reply.send(costumer);
        });
    }
}
exports.CreateCustomerController = CreateCustomerController;
