import { hash } from "bcryptjs"
import { PrismaOrgsRepository} from "../repositories/prisma/prisma-orgs-repository"
import { OrgRepository } from "../repositories/org-repository"
import { OrgAlreadyExists } from "./errors/org-already-exists"

interface RegisterUsecaseRequest {
  name: string,
  email: string,
  password: string,
  whatsapp: string,
  address: string
}

export class RegisterUsecase {

  private orgRepository:OrgRepository

  constructor(orgRepository:OrgRepository){
    this.orgRepository = orgRepository
  }

  async execute({ address, email, name, password, whatsapp }: RegisterUsecaseRequest) {
    const orgWhithSameEmail = await this.orgRepository.findByEmail(email)
  
    if (orgWhithSameEmail) {
      throw new OrgAlreadyExists()
    }
  
    const password_hash = await hash(password, 6)
  
    const org  = await this.orgRepository.create({ address, email, name, password:password_hash, whatsapp, })
  
    return { org }
  }
}
