import { Auction } from "../../domain/auction";
import { InMemoryAuctionRepoImpl } from "../../repos/implementations/InMemoryAuctionRepoImpl";
import { CreateAuctionUseCase } from "../createAuction/CreateAuctionUseCase";
import { GetAuctionUseCase } from "./GetAuctionUseCase";
import { NotFound } from "http-errors";

let createAuctionUseCase: CreateAuctionUseCase;
let getAuctionUseCase: GetAuctionUseCase;
let inMemoryAuctionRepo: InMemoryAuctionRepoImpl;

let createdAuction: Auction;

describe("GetAuctionUseCase", () => {
  beforeEach(async () => {
    inMemoryAuctionRepo = new InMemoryAuctionRepoImpl();
    createAuctionUseCase = new CreateAuctionUseCase(inMemoryAuctionRepo);
    getAuctionUseCase = new GetAuctionUseCase(inMemoryAuctionRepo);

    createdAuction = await createAuctionUseCase.execute({ title: "Test" });
  });

  it("should be able to get auction", async () => {
    const response = await getAuctionUseCase.execute({ id: createdAuction.id });

    expect(response.id).toEqual(createdAuction.id);
  });

  it("should not be able to get auction if non existing", async () => {
    try {
      await getAuctionUseCase.execute({ id: "non-existing-id" });
    } catch (error) {
      expect(error).toBeInstanceOf(NotFound);
    }
  });
});
