import { Org, Prisma } from "@prisma/client";
import { randomUUID } from "crypto";
import { OrgRepository } from "../org-repository";

export class InMemoryOrgsRepository implements OrgRepository{
  
  
  items : Org[] = []

  async create(data:Prisma.OrgUncheckedCreateInput){
    const org = {
      id: randomUUID(),
      name: data.name,
      address: data.address,
      whatsapp: data.whatsapp,
      email: data.email,
      password: data.password,
      
    }

    this.items.push(org)

    return org
  }

  async findByEmail(email: string){
    const org = this.items.find((item)=> item.email === email)

    if(!org){
      return null
    }

    return org

  }
}