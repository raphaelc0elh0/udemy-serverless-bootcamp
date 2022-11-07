import { v4 as uuidV4 } from "uuid";

class Entity<T> {
  protected readonly _id: string;
  public readonly props: T;

  constructor(props: T, id?: string) {
    this._id = id ?? uuidV4();
    this.props = props;
  }
}

export { Entity };
