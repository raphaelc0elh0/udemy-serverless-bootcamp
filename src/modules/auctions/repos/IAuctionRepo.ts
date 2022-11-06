import { Auction } from "../domain/auction";

interface IAuctionRepo {
  save(auction: Auction): Promise<void>;
  findAll(): Promise<Auction[]>;
}

export { IAuctionRepo };
