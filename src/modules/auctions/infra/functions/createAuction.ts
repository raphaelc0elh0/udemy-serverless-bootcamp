import { middyfy } from "@libs/middyfy";
import { CreateAuctionController } from "../../useCases/createAuction/CreateAuctionController";

const createAuctionController = new CreateAuctionController();
export const handle = middyfy(createAuctionController.handle);
