import { middyfy } from "@libs/middyfy";
import { GetAuctionsController } from "../../useCases/getAuctions/GetAuctionsController";

const getAuctionsController = new GetAuctionsController();
export const handle = middyfy(getAuctionsController.handle);
