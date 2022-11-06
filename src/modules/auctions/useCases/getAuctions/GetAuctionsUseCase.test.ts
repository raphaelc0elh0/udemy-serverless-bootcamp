import { InMemoryAuctionRepoImpl } from "../../repos/implementations/InMemoryAuctionRepoImpl";
import { CreateAuctionUseCase } from "../createAuction/CreateAuctionUseCase";
import { GetAuctionsUseCase } from "./GetAuctionsUseCase";

let createAuctionUseCase: CreateAuctionUseCase;
let getAuctionsUseCase: GetAuctionsUseCase;
let inMemoryAuctionRepo: InMemoryAuctionRepoImpl;

describe("GetAuctionsUseCase", () => {
  beforeEach(async () => {
    inMemoryAuctionRepo = new InMemoryAuctionRepoImpl();
    createAuctionUseCase = new CreateAuctionUseCase(inMemoryAuctionRepo);
    getAuctionsUseCase = new GetAuctionsUseCase(inMemoryAuctionRepo);

    await createAuctionUseCase.execute({ title: "Test" });
  });

  it("should be able to create auction", async () => {
    const response = await getAuctionsUseCase.execute();

    expect(response).toHaveLength(1);
  });
});
