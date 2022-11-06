import { injectable, inject } from "tsyringe";
import { v4 as uuidV4 } from "uuid";
import { InternalServerError } from "http-errors";
import { Auction } from "../../domain/auction";
import { IAuctionRepo } from "../../repos/IAuctionRepo";

interface IRequest {
  title: string;
}

@injectable()
class CreateAuctionUseCase {
  constructor(
    @inject("AuctionRepo")
    private auctionRepo: IAuctionRepo
  ) {}

  async execute({ title }: IRequest): Promise<Auction> {
    const now = new Date();
    const auction: Auction = {
      id: uuidV4(),
      title,
      status: "OPEN",
      createdAt: now.toISOString(),
    };

    try {
      await this.auctionRepo.save(auction);
    } catch (error) {
      console.error(error);
      throw new InternalServerError(error);
    }

    return auction;
  }
}

export { CreateAuctionUseCase };
