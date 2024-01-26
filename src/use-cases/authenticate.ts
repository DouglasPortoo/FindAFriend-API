import { compare } from "bcryptjs";
import { OrgRepository } from "../repositories/org-repository";
import { InvalidCredentialsError } from "./errors/invalid-credentials-error";

interface authenticateRequest{
  email:string
  password:string
}

export class AuthenticateUseCase{
  private authenticateRepository:OrgRepository

  constructor(authenticateRepository:OrgRepository){
    this.authenticateRepository = authenticateRepository
  }

  async execute({email,password}:authenticateRequest){
    const org = await this.authenticateRepository.findByEmail(email)

    if(!org){
      throw new InvalidCredentialsError()
    }

    const doesPasswordMatches = await compare(password, org.password)

    if(!doesPasswordMatches){
      throw new InvalidCredentialsError()
    }

    return{org}
  }
}