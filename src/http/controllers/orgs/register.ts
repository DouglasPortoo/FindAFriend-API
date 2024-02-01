import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { OrgAlreadyExistsError } from "../../../use-cases/errors/org-already-exists-error";
import { makeRegisterUsecase } from "../../../use-cases/factories/make-register-use-case";

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

    const createOrgUseCase = makeRegisterUsecase()

    await createOrgUseCase.execute({ address, email, name, password, whatsapp })

  } catch (err) {

    if (err instanceof OrgAlreadyExistsError) {
      return reply.status(409).send({ message: err.message })
    }

    throw err

  }

  return reply.status(201).send()
}