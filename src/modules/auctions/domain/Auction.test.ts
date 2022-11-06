import { Auction } from "./auction";

describe("Auction", () => {
  it("should be able to be created", () => {
    const auction = Auction.create({
      title: "Some title",
    });

    expect(auction).toHaveProperty("id");
    expect(auction).toHaveProperty("title");
    expect(auction).toHaveProperty("status");
    expect(auction.status).toEqual("OPEN");
    expect(auction).toHaveProperty("createdAt");
  });
});
