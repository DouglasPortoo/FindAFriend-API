import { Prisma, Pet } from "@prisma/client";
import { PetRepository } from "../pet-repository";
import { randomUUID } from "crypto";

export class InMemoryPetsRepository implements PetRepository {

  item: Pet[] = []

  async create(data: Prisma.PetUncheckedCreateInput): Promise<Pet> {

    const pet = {
      id: randomUUID(),
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
}
