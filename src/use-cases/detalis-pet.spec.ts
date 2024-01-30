import { beforeEach, describe, expect, it } from "vitest";
import { InMemoryPetsRepository } from "../repositories/in-memory/in-memory-pets-repository";
import { DetailsPetUseCase } from "./details-pet";
import { randomUUID } from "node:crypto";
import { InvalidCredentialsError } from "./errors/invalid-credentials-error";

let petRepository: InMemoryPetsRepository
let sut: DetailsPetUseCase

describe("Register Pet Use Case", () => {

  beforeEach(() => {
    petRepository = new InMemoryPetsRepository()
    sut = new DetailsPetUseCase(petRepository)
  })

  it("should be able to view details of a pet up for adoption", async () => {

    const createPet = await petRepository.create({
      id: randomUUID(),
      name: "Bob",
      description: "Bob is a very nice dog",
      age: 3,
      size: "M",
      type: "Dog",
      energy: 3,
      city: "São Paulo",
      level_of_independence: "Low",
      org_id: "123"
    })

    const { pet } = await sut.execute({
      id: createPet.id
    })

    expect(pet).toEqual(expect.any(Object));
  })

  it("It should not be possible to view details of a pet up for adoption if it has not been registered", async () => {

    await expect(sut.execute({
      id: randomUUID()
    })
    ).rejects.toThrow(InvalidCredentialsError)
  })
})