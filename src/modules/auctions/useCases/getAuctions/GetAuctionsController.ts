import { APIGatewayHandler } from "@libs/api-gateway";
import { dicontainer } from "@libs/dicontainer";
import { GetAuctionsUseCase } from "./GetAuctionsUseCase";

class GetAuctionsController {
  handle: APIGatewayHandler = async () => {
    const getAuctionsUseCase = dicontainer.resolve(GetAuctionsUseCase);
    const auction = await getAuctionsUseCase.execute();

    return {
      statusCode: 201,
      body: JSON.stringify(auction),
    };
  };
}

export { GetAuctionsController };
