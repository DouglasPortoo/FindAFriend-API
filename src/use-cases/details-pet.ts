
import { Pet } from "@prisma/client";
import { PetRepository } from "../repositories/pet-repository";

interface DetailsUseCaseRequest {
  id: string
}

interface DetailsUseCaseResponse {
  pet: Pet
}

export class DetailsPetUseCase {
  private petRepository: PetRepository
  constructor(petRepository: PetRepository) {
    this.petRepository = petRepository;
  }
  async execute({ id }: DetailsUseCaseRequest): Promise<DetailsUseCaseResponse> {
    const pet = await this.petRepository.findbyid(id);
    return { pet };
  }
}