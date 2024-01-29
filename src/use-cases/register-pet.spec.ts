import { beforeEach, describe, expect, it } from "vitest";
import { RegisterPetUseCase } from "./register-pet";
import { InMemoryPetsRepository } from "../repositories/in-memory/in-memory-pets-repository";

let petRepository: InMemoryPetsRepository
let sut: RegisterPetUseCase

describe("Register Pet Use Case", () => {
  beforeEach(() => {
    petRepository = new InMemoryPetsRepository()
    sut = new RegisterPetUseCase(petRepository)
  })

  it("should to register a Pet", async () => {

    const { pet } = await sut.execute({
      name: "Bob",
      description: "Bob is a very nice dog",
      age: 3,
      size: "M",
      type: "Dog",
      energy: 3,
      city: "São Paulo",
      level_of_independence: "Low",
      orgId: "123"
    })

    expect(pet.id).toEqual(expect.any(String));
  }
  )
})