import { Auction } from "../../domain/auction";
import { IAuctionRepo } from "../IAuctionRepo";

import { dynamodb } from "@libs/dynamodb";

class DynamoDBAuctionRepoImpl implements IAuctionRepo {
  tableName = process.env.AUCTIONS_TABLE_NAME;

  async save(auction: Auction): Promise<void> {
    await dynamodb
      .put({
        TableName: this.tableName,
        Item: auction,
      })
      .promise();
  }

  async findAll(): Promise<Auction[]> {
    let auctions: Auction[] = [];
    const result = await dynamodb
      .scan({
        TableName: this.tableName,
      })
      .promise();

    auctions = result.Items as Auction[];
    return auctions;
  }

  async find(id: string): Promise<Auction> {
    let auction: Auction;
    const result = await dynamodb
      .get({
        TableName: this.tableName,
        Key: { id },
      })
      .promise();

    auction = result.Item as Auction;
    return auction;
  }
}

export { DynamoDBAuctionRepoImpl };
