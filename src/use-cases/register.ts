import { hash } from "bcryptjs"
import { OrgRepository } from "../repositories/org-repository"
import { OrgAlreadyExistsError } from "./errors/org-already-exists-error"
import { Org } from "@prisma/client"

interface RegisterUsecaseRequest {
  name: string,
  email: string,
  password: string,
  whatsapp: string,
  address: string
}


interface RegisterUsecaseResponse {
  org: Org
}

export class RegisterUsecase {

  private orgRepository: OrgRepository

  constructor(orgRepository: OrgRepository) {
    this.orgRepository = orgRepository
  }

  async execute({ address, email, name, password, whatsapp }: RegisterUsecaseRequest): Promise<RegisterUsecaseResponse> {
    const orgWhithSameEmail = await this.orgRepository.findByEmail(email)

    if (orgWhithSameEmail) {
      throw new OrgAlreadyExistsError()
    }

    const password_hash = await hash(password, 6)

    const org = await this.orgRepository.create({ address, email, name, password: password_hash, whatsapp, })

    return { org }
  }
}
