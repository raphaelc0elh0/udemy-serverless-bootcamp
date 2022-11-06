import { injectable, inject } from "tsyringe";
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
    const auction = Auction.create({
      title,
    });

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
