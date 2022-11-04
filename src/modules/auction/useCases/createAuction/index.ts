import { APIGatewayHandler } from "src/lib/api-gateway";
import { dynamodb } from "src/lib/dynamodb";
import { v4 as uuidV4 } from "uuid";

interface IRequestBody {
  title: string;
}

type Auction = {
  id: string;
  title: string;
  status: "OPEN" | "CLOSE";
  createdAt: string;
};

const createAuction: APIGatewayHandler = async (event) => {
  const { title } = JSON.parse(event.body) as IRequestBody;

  const now = new Date();
  const auction: Auction = {
    id: uuidV4(),
    title,
    status: "OPEN",
    createdAt: now.toISOString(),
  };

  await dynamodb
    .put({
      TableName: "AuctionsTable",
      Item: auction,
    })
    .promise();

  return {
    statusCode: 201,
    body: JSON.stringify(auction),
  };
};

export const handler = createAuction;
