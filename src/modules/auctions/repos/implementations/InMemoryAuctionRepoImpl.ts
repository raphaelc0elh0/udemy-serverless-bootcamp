import { Auction } from "../../domain/auction";
import { AuctionMap } from "../../mappers/AuctionMap";
import { IAuctionRepo } from "../IAuctionRepo";

class InMemoryAuctionRepoImpl implements IAuctionRepo {
  auctions: Auction[] = [];

  async save(auction: Auction): Promise<void> {
    const rawAuction = AuctionMap.toPersistence(auction);
    this.auctions.push(rawAuction);
  }

  async findAll(): Promise<Auction[]> {
    return this.auctions.map((auction) => AuctionMap.toDomain(auction));
  }

  async find(id: string): Promise<Auction> {
    const auction = this.auctions.find((auction) => auction.id === id);
    if (!auction) return undefined;
    return AuctionMap.toDomain(auction);
  }
}

export { InMemoryAuctionRepoImpl };
