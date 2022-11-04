import { APIGatewayHandler } from "src/lib/api-gateway";

interface IRequestBody {
  title: string;
}

type Auction = {
  title: string;
  status: "OPEN" | "CLOSE";
  createdAt: string;
};

const now = new Date();

const createAuction: APIGatewayHandler = async (event, context) => {
  const { title } = JSON.parse(event.body) as IRequestBody;

  const auction: Auction = {
    title,
    status: "OPEN",
    createdAt: now.toISOString(),
  };

  return {
    statusCode: 201,
    body: JSON.stringify(auction),
  };
};

export const handler = createAuction;
