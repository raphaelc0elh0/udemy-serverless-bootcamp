import { injectable, inject } from "tsyringe";
import { InternalServerError, NotFound } from "http-errors";
import { Auction } from "../../domain/auction";
import { IAuctionRepo } from "../../repos/IAuctionRepo";

interface IRequest {
  id: string;
}

@injectable()
class GetAuctionUseCase {
  constructor(
    @inject("AuctionRepo")
    private auctionRepo: IAuctionRepo
  ) {}

  async execute({ id }: IRequest): Promise<Auction> {
    let auction: Auction;

    try {
      auction = await this.auctionRepo.find(id);
    } catch (error) {
      console.error(error);
      throw new InternalServerError(error);
    }

    if (!auction) throw new NotFound(`Auction with ID ${id} not found`);

    return auction;
  }
}

export { GetAuctionUseCase };
