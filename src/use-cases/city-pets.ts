import { Pet } from "@prisma/client";
import { PetRepository } from "../repositories/pet-repository";

interface cityPetsUseCaseRequest {
    city: string
}

interface cityPetsUseCaseResponse {
    pet: Pet[]
}

export class cityPetsUseCase {

    private petRepository: PetRepository

    constructor(petRepository: PetRepository) {
        this.petRepository = petRepository;
    }
    async execute({ city }:cityPetsUseCaseRequest):Promise<cityPetsUseCaseResponse> {
        const pet = await this.petRepository.findByCity(city);
        return { pet };
    }
}