import { Pet } from "@prisma/client";
import { PetRepository } from "../repositories/pet-repository";

interface filterByTypeUseCaseRequest {
  type: string
  caracteristics: string
}

interface filterByTypeUseCaseResponse {
  pet: Pet[]
}

export class filterByTypeUseCase {
  private petRepository: PetRepository

  constructor(petRepository: PetRepository) {
    this.petRepository = petRepository;
  }

  async execute({type,caracteristics}:filterByTypeUseCaseRequest):Promise<filterByTypeUseCaseResponse>{
    const pet = await this.petRepository.filterByType(type,caracteristics);
    return { pet };
  }
}