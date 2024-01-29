import { Pet } from "@prisma/client";
import { PetRepository } from "../repositories/pet-repository";

interface RegisterUseCaseRequest {
  name: string,
  description: string,
  age: number,
  size: string,
  type: string,
  energy: number,
  city: string,
  level_of_independence: string
  orgId:string
  
}

interface RegisterUseCaseResponse {
  pet: Pet
}

export class RegisterPetUseCase {

  private petRepository: PetRepository

  constructor(petRepository: PetRepository) {
    this.petRepository = petRepository
  }

  async execute({ name, description, age, size, type, energy, city, level_of_independence, orgId }: RegisterUseCaseRequest): Promise<RegisterUseCaseResponse> {

    const pet = await this.petRepository.create({ name, description, age, size, type, energy, city, level_of_independence, org_id: orgId });

    return { pet };
  }
}