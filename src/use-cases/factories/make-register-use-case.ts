import { PrismaOrgsRepository } from "../../repositories/prisma/prisma-orgs-repository"
import { RegisterUsecase } from "../register"

export function makeRegisterUsecase() {
  const orgsRepository = new PrismaOrgsRepository()
  const useCase = new RegisterUsecase(orgsRepository)

  return useCase
}