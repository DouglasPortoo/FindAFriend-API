import { describe, it, beforeEach, expect } from "vitest"
import { InMemoryOrgsRepository } from "../repositories/in-memory/in-memory-orgs-repository"
import { compare, hash } from "bcryptjs"
import { OrgAlreadyExistsError } from "./errors/org-already-exists-error"
import { AuthenticateUseCase } from "./authenticate"
import { InvalidCredentialsError } from "./errors/invalid-credentials-error"

let orgRepository: InMemoryOrgsRepository
let sut: AuthenticateUseCase

describe("Authenticate Use Case", () => {

  beforeEach(() => {
    orgRepository = new InMemoryOrgsRepository()
    sut = new AuthenticateUseCase(orgRepository)
  })

  it("should be able to authenticate", async () => {
    await orgRepository.create({
      name: "AUmigos",
      address: "Rua numero 0",
      email: "aumigos.org@aumigos.com",
      password: await hash("123456",6),
      whatsapp: "11 9 7070-7070"
    })
    
    const { org } = await sut.execute({
      email: "aumigos.org@aumigos.com",
      password: "123456",
    })

    expect(org.id).toEqual(expect.any(String));
  })

  it("should not be able authenticate with wrong email", async () => {
    await expect(()=>
    sut.execute({
      email: "aumigos.org@aumigos.com",
      password: "123456",
    })
    ).rejects.toBeInstanceOf(InvalidCredentialsError)
  })

  it("should not be able authenticate with wrong password", async () => {
    await orgRepository.create({
      name: "AUmigos",
      address: "Rua numero 0",
      email: "aumigos.org@aumigos.com",
      password: await hash("123456",6),
      whatsapp: "11 9 7070-7070"
    })

    await expect(()=>
    sut.execute({
      email: "aumigos.org@aumigos.com",
      password: "1234567",
    })
    ).rejects.toBeInstanceOf(InvalidCredentialsError)
  })
})