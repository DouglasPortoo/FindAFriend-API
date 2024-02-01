import { Pet } from "@prisma/client";
import { PetRepository } from "../repositories/pet-repository";

export interface filterByTypeUseCaseRequest {
  city: string
  type?: string
  caracteristics?: keyof Pet
}

interface filterByTypeUseCaseResponse {
  pet: Pet[]
}

export class filterByTypeUseCase {
  private petRepository: PetRepository

  constructor(petRepository: PetRepository) {
    this.petRepository = petRepository;
  }

  async execute({city, type, caracteristics}:filterByTypeUseCaseRequest):Promise<filterByTypeUseCaseResponse>{
    const pet = await this.petRepository.filterByType(city, type, caracteristics);
    return { pet };
  }
}