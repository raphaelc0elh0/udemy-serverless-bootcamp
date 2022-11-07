import { middyfy } from "@libs/middyfy";
import { GetAuctionController } from "../../useCases/getAuction/GetAuctionController";

const getAuctionController = new GetAuctionController();
export const handle = middyfy(getAuctionController.handle);
