import { PartialBy } from "../../utils/types.ts";

type StudentClassProps = {
  [K in keyof Student]: Student[K];
};

export type StudentArgs = PartialBy<Omit<StudentClassProps, "created_at" | "updated_at">, "id">

export class Student {
  public id: string = "";
  public name: string;
  public email: string;
  public password: string;
  public created_at: Date;
  public updated_at?: Date;

  constructor({ id, name, email, password }: StudentArgs) {
    if (!id) {
      this.id = crypto.randomUUID();
    }
    this.name = name;
    this.email = email;
    this.password = password;
    this.created_at = new Date();
    this.updated_at = new Date();
  }
}