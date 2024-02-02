import { PrismaPetsRepository } from "../../repositories/prisma/prisma-pets-repository"
import { cityPetsUseCase } from "../city-pets"

export function makeCityPetUseCase() {
  const cityPetRepository = new PrismaPetsRepository()
  const useCase = new cityPetsUseCase(cityPetRepository)

  return useCase
}