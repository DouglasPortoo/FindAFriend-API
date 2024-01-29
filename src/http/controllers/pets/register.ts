import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function register(req: FastifyRequest, reply: FastifyReply) {
  const registerBodySchema = z.object({
    name: z.string(),
    description: z.string(),
    age: z.number(),
    size: z.string(),
    type: z.string(),
    energy: z.number(),
    city: z.string(),
    level_of_independence: z.string(),
  })

  const { name, description, age, size, type, energy, city, level_of_independence } = registerBodySchema.parse(req.body)
}