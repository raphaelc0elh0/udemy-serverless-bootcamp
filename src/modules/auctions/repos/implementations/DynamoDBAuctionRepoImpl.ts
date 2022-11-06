import { Auction } from "../../domain/auction";
import { IAuctionRepo } from "../IAuctionRepo";

import { dynamodb } from "@libs/dynamodb";

class DynamoDBAuctionRepoImpl implements IAuctionRepo {
  async save(auction: Auction): Promise<void> {
    await dynamodb
      .put({
        TableName: process.env.AUCTIONS_TABLE_NAME,
        Item: auction,
      })
      .promise();
  }
  async findAll(): Promise<Auction[]> {
    let auctions: Auction[] = [];
    const result = await dynamodb
      .scan({
        TableName: process.env.AUCTIONS_TABLE_NAME,
      })
      .promise();

    auctions = result.Items as Auction[];
    return auctions;
  }
}

export { DynamoDBAuctionRepoImpl };
