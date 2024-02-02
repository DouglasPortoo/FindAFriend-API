import { PrismaPetsRepository } from "../../repositories/prisma/prisma-pets-repository"
import { RegisterPetUseCase } from "../register-pet"

export function makeRegisterPetUseCase() {
  const petRepository = new PrismaPetsRepository()
  const useCase = new RegisterPetUseCase(petRepository)

  return useCase
}