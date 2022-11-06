import { Auction } from "../../domain/auction";
import { IAuctionRepo } from "../IAuctionRepo";

class InMemoryAuctionRepoImpl implements IAuctionRepo {
  auctions: Auction[] = [];

  async save(auction: Auction): Promise<void> {
    this.auctions.push(auction);
  }

  async findAll(): Promise<Auction[]> {
    return this.auctions;
  }
}

export { InMemoryAuctionRepoImpl };
