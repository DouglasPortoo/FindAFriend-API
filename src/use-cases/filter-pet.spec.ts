import { beforeEach, describe, expect, it } from "vitest";
import { InMemoryPetsRepository } from "../repositories/in-memory/in-memory-pets-repository";
import { filterByTypeUseCase } from "./filter-pets";


let petRepository: InMemoryPetsRepository
let sut: filterByTypeUseCase

describe("Filter Pets Use Case", () => {
  beforeEach(()=>{
    petRepository = new InMemoryPetsRepository()
    sut = new filterByTypeUseCase(petRepository)
  })

  it("should be possible to filter pets by their characteristics", async()=>{
    await petRepository.create({
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

    await petRepository.create({
      name: "Alice",
      description: "Alice is a friendly cat",
      age: 2,
      size: "S",
      type: "Cat",
      energy: 2,
      city: "Rio de Janeiro",
      level_of_independence: "Medium",
      org_id: "123"
    })

    await petRepository.create({
      name: "Charlie",
      description: "Charlie is a playful rabbit",
      age: 1,
      size: "S",
      type: "Rabbit",
      energy: 3,
      city: "São Paulo",
      level_of_independence: "High",
      org_id: "123"
    })

    await petRepository.create({
      name: "Daisy",
      description: "Daisy is a calm turtle",
      age: 5,
      size: "S",
      type: "Turtle",
      energy: 1,
      city: "Rio de Janeiro",
      level_of_independence: "High",
      org_id: "123"
    })

    const {pet} = await sut.execute({city:"Rio de Janeiro", type:"High", caracteristics:"level_of_independence"})

    expect(pet).toEqual(expect.any(Array));  
  })
})