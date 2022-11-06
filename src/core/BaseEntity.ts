import { v4 as uuidV4 } from "uuid";

class BaseEntity<T> {
  protected readonly id: string;

  constructor(props: T, id?: string) {
    if (!id) this.id = uuidV4();
    Object.assign(this, { ...props });
  }
}

export { BaseEntity };
