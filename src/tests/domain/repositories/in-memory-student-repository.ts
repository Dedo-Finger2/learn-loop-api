import { Student, StudentArgs } from "../../../domain/models/student.ts";

export class InMemoryStudentRepository {
  public students: Student[];
  private static INSTANCE: InMemoryStudentRepository;

  private constructor() {
    this.students = [];
  }

  public static getInstance() {
    if (!InMemoryStudentRepository.INSTANCE) {
      InMemoryStudentRepository.INSTANCE = new InMemoryStudentRepository();
    }
    return InMemoryStudentRepository.INSTANCE;
  }

  public create({ id, name, email, password } : StudentArgs) {
    const student = new Student({
      id,
      name,
      email,
      password,
    });
    this.students.push(student);
  }
}