import { BaseEntity } from "@core/BaseEntity";

type AuctionProps = {
  title: string;
  status?: "OPEN" | "CLOSE";
  createdAt?: string;
};

class Auction extends BaseEntity<AuctionProps> {
  readonly id: string;
  title: string;
  status: "OPEN" | "CLOSE";
  createdAt: string;

  constructor(props: AuctionProps, id?: string) {
    super(props, id);
  }

  static create(props: AuctionProps) {
    const { title, status, createdAt } = props;

    return new Auction({
      title,
      status: status ?? "OPEN",
      createdAt: createdAt ?? new Date().toISOString(),
    });
  }
}

export { Auction };
