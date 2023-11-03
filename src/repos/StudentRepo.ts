import prisma from '../lib/prisma.ts'

export type Student = {
  id?: number
  firstName: string
  lastName: string
  groupUnit: number
  password: string
}

export const exists = async (
  firstName: string,
  lastName: string,
  groupUnit: number
) => {
  const student = await prisma.student.findFirst({
    where: {
      firstName,
      lastName,
      groupUnit,
    },
  })

  return student
}

export const remove = async () => {
  return 'not implemented'
}

export const getStudentById = async (studentId: number) => {
  const student = await prisma.student.findUnique({
    where: { id: studentId },
  })

  return student
}

export const getAllStudents = async () => {
  return 'not implemented'
}

export const create = async (student: Student) => {
  const newStudent = await prisma.student.create({
    data: {
      firstName: student.firstName,
      lastName: student.lastName,
      groupUnit: student.groupUnit,
      password: student.password,
    },
  })

  return newStudent
}
