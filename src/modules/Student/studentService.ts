import createError from 'http-errors'
import { generateHash, validatePassword } from '../../lib/passwordUtils'
import jwt from 'jsonwebtoken'
import { SECRET } from '../../config'
import { Student } from '../../repos/StudentRepo'
import * as StudentRepo from '../../repos/StudentRepo'

export const register = async (student: Student) => {
  const isStudentExists = await StudentRepo.exists(
    student.firstName,
    student.lastName,
    student.groupUnit
  )

  if (isStudentExists) {
    throw createError(409, 'Student already exists')
  }

  const newStudent = await StudentRepo.create({
    firstName: student.firstName,
    lastName: student.lastName,
    groupUnit: student.groupUnit,
    password: generateHash(student.password),
  })

  const payload = {
    sub: newStudent.id,
    name: newStudent.firstName,
    role: 'STUDENT',
    iat: Math.floor(Date.now() / 1000),
  }

  const token = jwt.sign(payload, SECRET as string, {
    expiresIn: '3d',
    algorithm: 'HS256',
  })

  return token
}

export const logIn = async (credentials: Student) => {
  const student = await StudentRepo.exists(
    credentials.firstName,
    credentials.lastName,
    credentials.groupUnit
  )

  if (!student) {
    throw createError(400, 'No such student')
  }

  const isPasswordValid = validatePassword(
    credentials.password,
    student.password
  )

  if (!isPasswordValid) {
    throw createError(401, 'Incorrect password')
  }

  const payload = {
    sub: student.id,
    name: student.firstName,
    role: 'STUDENT',
    iat: Math.floor(Date.now() / 1000),
  }

  const token = jwt.sign(payload, SECRET as string, {
    expiresIn: '3d',
    algorithm: 'HS256',
  })

  return token
}
