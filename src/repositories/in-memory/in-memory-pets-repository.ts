import { Prisma, Pet } from "@prisma/client";
import { PetRepository } from "../pet-repository";
import { randomUUID } from "crypto";
import { InvalidCredentialsError } from "../../use-cases/errors/invalid-credentials-error";

export class InMemoryPetsRepository implements PetRepository {
  
  item: Pet[] = []

  async create(data: Prisma.PetUncheckedCreateInput): Promise<Pet> {

    const pet = {
      id: data.id ?? randomUUID(),
      name: data.name,
      description: data.description,
      age: data.age,
      size: data.size,
      type: data.type,
      energy: data.energy,
      city: data.city,
      level_of_independence: data.level_of_independence,
      org_id: data.org_id
    }

    this.item.push(pet);
    return pet;
  }

  async findbyid(id: string) {
    const pet = this.item.find(item => item.id === id);

    if(!pet){
      throw new InvalidCredentialsError()
    }

    return pet;
  }

  async findByCity(city: string) {
    return this.item.filter(item => item.city === city);
  }

  async filterByType(city: string, type?: string, caracteristics?: keyof Pet) {
    return this.item.filter((pet: Pet) => {
        if (type && caracteristics) {
            return pet[caracteristics] === type && pet.city === city;
        } else {
            return pet.city === city;
        }
    });
}
}
