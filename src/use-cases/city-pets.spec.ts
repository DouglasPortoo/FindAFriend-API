
import { beforeEach, describe, expect, it } from "vitest";
import { InMemoryPetsRepository } from "../repositories/in-memory/in-memory-pets-repository";
import { cityPetsUseCase } from "./city-pets";

let petRepository: InMemoryPetsRepository
let sut: cityPetsUseCase

describe("City Pets Use Case", () => {

  beforeEach(() => {
    petRepository = new InMemoryPetsRepository()
    sut = new cityPetsUseCase(petRepository)
  })

  it("should be able to to list all pets available for adoption in a city", async () => {
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
      city: "São Paulo",
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

    await petRepository.create({
      name: "Eddie",
      description: "Eddie is a cheerful parrot",
      age: 2,
      size: "S",
      type: "Parrot",
      energy: 3,
      city: "Rio de Janeiro",
      level_of_independence: "Medium",
      org_id: "123"
    })

    const cities = ["São Paulo", "Rio de Janeiro"];
    const randomCity = cities[Math.floor(Math.random() * cities.length)];

    const pets = await sut.execute({
      city: randomCity
    });

    console.log(pets)

    expect(pets).toEqual(expect.any(Object));
    expect(pets.pet[0].city).toEqual(randomCity);
    
  })
})