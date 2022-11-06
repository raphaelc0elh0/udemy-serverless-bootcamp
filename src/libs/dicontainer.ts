import "reflect-metadata";
import { DynamoDBAuctionRepoImpl } from "src/modules/auctions/repos/implementations/DynamoDBAuctionRepoImpl";
import { container } from "tsyringe";

container.registerSingleton("AuctionRepo", DynamoDBAuctionRepoImpl);

export const dicontainer = container;
