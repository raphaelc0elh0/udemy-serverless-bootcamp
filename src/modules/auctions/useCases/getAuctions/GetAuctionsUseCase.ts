import { injectable, inject } from "tsyringe";
import { InternalServerError } from "http-errors";
import { Auction } from "../../domain/auction";
import { IAuctionRepo } from "../../repos/IAuctionRepo";

@injectable()
class GetAuctionsUseCase {
  constructor(
    @inject("AuctionRepo")
    private auctionRepo: IAuctionRepo
  ) {}

  async execute(): Promise<Auction[]> {
    let auctions: Auction[] = [];

    try {
      auctions = await this.auctionRepo.findAll();
    } catch (error) {
      console.error(error);
      throw new InternalServerError(error);
    }

    return auctions;
  }
}

export { GetAuctionsUseCase };
