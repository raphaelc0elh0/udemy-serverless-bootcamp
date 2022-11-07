import { Auction } from "../domain/auction";
import { AuctionDTO } from "../dtos/AuctionDTO";

class AuctionMap {
  public static toDomain(raw: any): Auction {
    return Auction.create(
      {
        title: raw.title,
        status: raw.status,
        createdAt: raw.createdAt,
      },
      raw.id
    );
  }

  public static toPersistence(auction: Auction): any {
    return {
      id: auction.id,
      title: auction.title,
      status: auction.status,
      createdAt: auction.createdAt,
    };
  }

  public static toDTO(auction: Auction): AuctionDTO {
    return {
      id: auction.id,
      title: auction.title,
      status: auction.status,
      createdAt: auction.createdAt,
    };
  }
}

export { AuctionMap };
