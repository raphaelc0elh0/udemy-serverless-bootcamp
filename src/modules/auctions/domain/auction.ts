import { Entity } from "@core/Entity";

type AuctionProps = {
  title: string;
  status?: "OPEN" | "CLOSE";
  createdAt?: string;
};

class Auction extends Entity<AuctionProps> {
  get id() {
    return this._id;
  }

  get title() {
    return this.props.title;
  }

  get status() {
    return this.props.status;
  }

  get createdAt() {
    return this.props.createdAt;
  }

  constructor(props: AuctionProps, id?: string) {
    super(props, id);
  }

  static create(props: AuctionProps, id?: string) {
    const { title, status, createdAt } = props;

    const auction = new Auction(
      {
        title,
        status: status ?? "OPEN",
        createdAt: createdAt ?? new Date().toISOString(),
      },
      id
    );

    return auction;
  }
}

export { Auction };
