import { APIGatewayHandler } from "@libs/api-gateway";
import { dicontainer } from "@libs/dicontainer";
import { CreateAuctionUseCase } from "./CreateAuctionUseCase";

interface IRequestBody {
  title: string;
}

class CreateAuctionController {
  handle: APIGatewayHandler = async (event) => {
    const { title } = event.body as unknown as IRequestBody;

    const createAuctionUseCase = dicontainer.resolve(CreateAuctionUseCase);
    const auction = await createAuctionUseCase.execute({ title });

    return {
      statusCode: 201,
      body: JSON.stringify(auction),
    };
  };
}

export { CreateAuctionController };
