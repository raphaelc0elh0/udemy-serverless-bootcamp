import { APIGatewayHandler } from "src/lib/api-gateway";
import { dynamodb } from "src/lib/dynamodb";
import { middyfy } from "src/lib/middyfy";
import { v4 as uuidV4 } from "uuid";
import { InternalServerError } from "http-errors";

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
  const { title } = event.body as unknown as IRequestBody;

  const now = new Date();
  const auction: Auction = {
    id: uuidV4(),
    title,
    status: "OPEN",
    createdAt: now.toISOString(),
  };

  try {
    await dynamodb
      .put({
        TableName: process.env.AUCTIONS_TABLE_NAME,
        Item: auction,
      })
      .promise();
  } catch (error) {
    console.error(error);
    throw new InternalServerError(error);
  }

  return {
    statusCode: 201,
    body: JSON.stringify(auction),
  };
};

export const handler = middyfy(createAuction);
