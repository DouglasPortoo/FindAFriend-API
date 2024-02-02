import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { makeRegisterPetUseCase } from "../../../use-cases/factories/make-register-pet-use-case";

export async function registerAPet(req: FastifyRequest, reply: FastifyReply) {

  const orgId = req.user.sub

  const registerBodySchema = z.object({
    name: z.string(),
    description: z.string(),
    age: z.number(),
    size: z.string(),
    type: z.string(),
    energy: z.number(),
    city: z.string(),
    level_of_independence: z.string(),
  });

  const { name, description, age, size, type, energy, city, level_of_independence } = registerBodySchema.parse(req.body);

  try {

    const createPetUseCase = makeRegisterPetUseCase()

    await createPetUseCase.execute({ name, description, age, size, type, energy, city, level_of_independence, orgId})

  } catch (err) {

    throw err

  }

  return reply.status(201).send()
}