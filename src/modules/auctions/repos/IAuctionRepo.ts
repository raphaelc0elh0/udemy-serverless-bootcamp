import { Auction } from "../domain/auction";

interface IAuctionRepo {
  save(auction: Auction): Promise<void>;
  findAll(): Promise<Auction[]>;
  find(id: string): Promise<Auction>;
}

export { IAuctionRepo };
