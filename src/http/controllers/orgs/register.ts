import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { RegisterUsecase } from "../../../use-cases/register";
import { PrismaOrgsRepository } from "../../../repositories/prisma/prisma-orgs-repository";
import { OrgAlreadyExists } from "../../../use-cases/errors/org-already-exists";

export async function register(req: FastifyRequest, reply: FastifyReply) {
  const registerBodySchema = z.object({
    name: z.string(),
    address: z.string(),
    whatsapp: z.string(),
    email: z.string().email(),
    password: z.string()
  })

  const { address, email, name, password, whatsapp } = registerBodySchema.parse(req.body)

  try {

    const orgsRepository = new PrismaOrgsRepository()
    const registerUseCase = new RegisterUsecase(orgsRepository)

    await registerUseCase.execute({ address, email, name, password, whatsapp })

    return reply.status(201).send()
  } catch (err) {

    if (err instanceof OrgAlreadyExists) {
      return reply.status(409).send({ message: err.message })
    }

    throw err

  }
}