import { FastifyRequest, FastifyReply } from "fastify";
import { CreateCustomerService } from "../services/createCustomerService";

class CreateCustomerController {
    async handle(request: FastifyRequest,reply: FastifyReply) {
        const {name, email} = request.body as {name: string, email: string};

        const costumerService = new CreateCustomerService();
        const costumer = await costumerService.execute({ name, email });

        reply.send(costumer);

    }
}

export {CreateCustomerController};