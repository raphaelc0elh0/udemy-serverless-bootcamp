import { Auction } from "../domain/auction";

interface AuctionDTO {
  id: string;
  title: string;
  status: Auction["status"];
  createdAt: string;
}

export { AuctionDTO };
