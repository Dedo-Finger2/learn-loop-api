import { assert } from "https://deno.land/std@0.224.0/assert/mod.ts";
import { RegisterStudent } from "../../../domain/use-cases/register-student.ts";
import { InMemoryStudentRepository } from "../repositories/in-memory-student-repository.ts";

Deno.test("it should register a new student", async () => {
  const studentRepository = InMemoryStudentRepository.getInstance();
  const sut = new RegisterStudent(studentRepository);
  const student = {
    name: "student",
    email: "teste@teste.com",
    password: "123123",
  };
  
  await sut.execute(student);

  assert(studentRepository.students.filter((repoStudent) => repoStudent.email === student.email));
});