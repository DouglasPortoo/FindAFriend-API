import { Pet, Prisma } from "@prisma/client";

export interface PetRepository{
  create(data:Prisma.PetUncheckedCreateInput):Promise<Pet>
  findbyid(id:string):Promise<Pet>
  findByCity(city:string):Promise<Pet[]>
  filterByType(type:string,caracteristics:string):Promise<Pet[]>
}