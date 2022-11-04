import { APIGatewayHandler } from "src/lib/api-gateway";
import { dynamodb } from "src/lib/dynamodb";
import { middyfy } from "src/lib/middyfy";
import { InternalServerError } from "http-errors";

type Auction = {
  id: string;
  title: string;
  status: "OPEN" | "CLOSE";
  createdAt: string;
};

const getAuctions: APIGatewayHandler = async () => {
  let auctions: Auction[] = [];

  try {
    const result = await dynamodb
      .scan({
        TableName: process.env.AUCTIONS_TABLE_NAME,
      })
      .promise();

    auctions = result.Items as Auction[];
  } catch (error) {
    console.error(error);
    throw new InternalServerError(error);
  }

  return {
    statusCode: 200,
    body: JSON.stringify(auctions),
  };
};

export const handler = middyfy(getAuctions);
