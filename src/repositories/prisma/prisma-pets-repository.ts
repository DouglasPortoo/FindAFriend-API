import { Pet, Prisma } from "@prisma/client";
import { prisma } from "../../lib/prisma";
import { PetRepository } from "../pet-repository";

type FilterKeys = 'city' | keyof Pet;

export class PrismaPetsRepository implements PetRepository {
  async create(data: Prisma.PetUncheckedCreateInput) {
    return await prisma.pet.create({ data });
  }
  async findbyid(id: string) {
    return await prisma.pet.findUnique({ where: { id } });
  }
  async findByCity(city: string) {
    return await prisma.pet.findMany({ where: { city } });
  }

  
  async filterByType(city: string, type?: string, characteristics?: keyof Pet) {
    const where: Prisma.PetWhereInput = { city: city };

    if (type && characteristics) {
        if (characteristics === 'age') {
            where[characteristics] = Number(type);
        } else {
            where[characteristics] = type;
        }
    }

    return await prisma.pet.findMany({ where });
}

}