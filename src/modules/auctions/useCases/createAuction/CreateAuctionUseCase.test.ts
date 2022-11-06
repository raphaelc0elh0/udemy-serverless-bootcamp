import { InMemoryAuctionRepoImpl } from "../../repos/implementations/InMemoryAuctionRepoImpl";
import { CreateAuctionUseCase } from "./CreateAuctionUseCase";

let createAuctionUseCase: CreateAuctionUseCase;
let inMemoryAuctionRepo: InMemoryAuctionRepoImpl;

describe("CreateAuctionUseCase", () => {
  beforeEach(async () => {
    inMemoryAuctionRepo = new InMemoryAuctionRepoImpl();
    createAuctionUseCase = new CreateAuctionUseCase(inMemoryAuctionRepo);
  });

  it("should be able to create auction", async () => {
    const response = await createAuctionUseCase.execute({
      title: "Test",
    });

    const createdAuction = inMemoryAuctionRepo.auctions.find(
      (auction) => auction.id === response.id
    );

    expect(createdAuction).toHaveProperty("id");
    expect(createdAuction).toHaveProperty("title");
    expect(createdAuction).toHaveProperty("status");
    expect(createdAuction).toHaveProperty("createdAt");
    expect(createdAuction.id).toEqual(response.id);
  });
});
