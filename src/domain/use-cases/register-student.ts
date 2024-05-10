import { InMemoryStudentRepository } from "../../tests/domain/repositories/in-memory-student-repository.ts";
import { StudentArgs } from "../models/student.ts";

export class RegisterStudent {
  constructor(
    private studentRepository: InMemoryStudentRepository,
  ) {}

  async execute({ id, name, email, password }: StudentArgs): Promise<void> {
    this.studentRepository.create({
      id,
      name,
      email,
      password,
    });
  }
}