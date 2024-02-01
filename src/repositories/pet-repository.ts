import { Pet, Prisma } from "@prisma/client";

export interface PetRepository{
  create(data:Prisma.PetUncheckedCreateInput):Promise<Pet>
  findbyid(id:string):Promise<Pet| null>
  findByCity(city:string):Promise<Pet[]>
  filterByType(city: string, type?: string, caracteristics?: keyof Pet):Promise<Pet[]>
}