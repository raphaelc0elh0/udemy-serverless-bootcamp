import { APIGatewayHandler } from "@libs/api-gateway";
import { dicontainer } from "@libs/dicontainer";
import { GetAuctionUseCase } from "./GetAuctionUseCase";

interface IRequestPathParams {
  id: string;
}

class GetAuctionController {
  handle: APIGatewayHandler = async (event) => {
    const { id } = event.pathParameters as unknown as IRequestPathParams;

    const getAuctionUseCase = dicontainer.resolve(GetAuctionUseCase);
    const auction = await getAuctionUseCase.execute({ id });

    return {
      statusCode: 201,
      body: JSON.stringify(auction),
    };
  };
}

export { GetAuctionController };
