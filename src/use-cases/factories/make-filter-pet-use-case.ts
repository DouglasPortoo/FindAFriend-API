import { PrismaPetsRepository } from "../../repositories/prisma/prisma-pets-repository"
import { filterByTypeUseCase } from "../filter-pets"

export function makeFilterPetUseCase() {
  const filterPetRepository = new PrismaPetsRepository() 
  const useCase = new filterByTypeUseCase(filterPetRepository)

  return useCase
}