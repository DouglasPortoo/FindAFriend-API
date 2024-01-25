import { Prisma } from "@prisma/client";
import { prisma } from "../../lib/prisma";
import { OrgRepository } from "../org-repository";

export class PrismaOrgsRepository implements OrgRepository{

  async create(data:Prisma.OrgCreateInput){
    const org = await prisma.org.create({
      data,
    })

    return org
  }
  
  async findByEmail(email: string) {
    const user = prisma.org.findUnique({
      where:{
        email
      }
    })

    if(!user){
      return null
    }

    return user
  }

  
}