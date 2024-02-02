import { PrismaOrgsRepository } from "../../repositories/prisma/prisma-orgs-repository"
import { AuthenticateUseCase } from "../authenticate"

export function makeAuthenticateUseCase() {
  const authenticateRepository = new PrismaOrgsRepository()
  const useCase = new AuthenticateUseCase(authenticateRepository)

  return useCase
}