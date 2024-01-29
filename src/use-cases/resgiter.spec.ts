import { describe, it, beforeEach, expect } from "vitest"
import { RegisterUsecase } from "./register"
import { InMemoryOrgsRepository } from "../repositories/in-memory/in-memory-orgs-repository"
import { compare } from "bcryptjs"
import { OrgAlreadyExistsError } from "./errors/org-already-exists-error"

let orgRepository: InMemoryOrgsRepository
let sut: RegisterUsecase

describe("Register Use Case", () => {

  beforeEach(() => {
    orgRepository = new InMemoryOrgsRepository()
    sut = new RegisterUsecase(orgRepository)
  })

  it("should to register a Org", async () => {
    const { org } = await sut.execute({
      name: "AUmigos",
      address: "Rua numero 0",
      email: "aumigos.org@aumigos.com",
      password: "123456",
      whatsapp: "11 9 7070-7070"
    })

    expect(org.id).toEqual(expect.any(String));
  })

  it("should be hashed the org password upon register", async () => {
    const { org } = await sut.execute({
      name: "AUmigos",
      address: "Rua numero 0",
      email: "aumigos.org@aumigos.com",
      password: "123456",
      whatsapp: "11 9 7070-7070",
    })

    const isPasswordCorrectlyHashed = await compare("123456", org.password)

    expect(isPasswordCorrectlyHashed).toBe(true)
  })

  it("should not be able to register with an email that already exists in database", async () => {
    await sut.execute({
      name: "AUmigos",
      address: "Rua numero 0",
      email: "aumigos.org@aumigos.com",
      password: "123456",
      whatsapp: "11 9 7070-7070"
    })

    await expect(() =>
      sut.execute({
        name: "AUmigos",
        address: "Rua numero 0",
        email: "aumigos.org@aumigos.com",
        password: "123456",
        whatsapp: "11 9 7070-7070"
      })
    ).rejects.toBeInstanceOf(OrgAlreadyExistsError)
  })
})