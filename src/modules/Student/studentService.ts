import { Request, Response } from 'express'
import asyncHandler from 'express-async-handler'
import { passport } from '../../lib/passport'
import { validate } from '../../middleware/validateRequest.ts'
import { studentDTO } from './studentDTO'
import { generateHash, validatePassword } from '../../lib/passwordUtils'
import jwt from 'jsonwebtoken'
import { SECRET } from '../../config'
import * as StudentRepo from '../../repos/StudentRepo'

export const register = [
  validate(studentDTO),
  asyncHandler(async (req, res) => {
    const { firstName, lastName, groupUnit, password } = req.body

    const isStudentExists = await StudentRepo.exists(
      firstName,
      lastName,
      groupUnit
    )

    if (isStudentExists) {
      res.status(409).json({ error: 'Student already exists' })
      return
    }

    const newStudent = await StudentRepo.create({
      firstName,
      lastName,
      groupUnit,
      password: generateHash(password),
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

    res.status(202).json({ token })
  }),
]

export const login = [
  validate(studentDTO),
  asyncHandler(async (req, res) => {
    const { firstName, lastName, groupUnit, password } = req.body

    const student = await StudentRepo.exists(firstName, lastName, groupUnit)

    if (!student) {
      res.status(400).json({
        error: 'No such student',
      })
      return
    }

    const isPasswordValid = validatePassword(password, student.password)

    if (!isPasswordValid) {
      res.status(401).json({
        error: 'Incorrect passoword',
      })
      return
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

    res.status(202).json({ token })
  }),
]

export const checkIfAuthorized = [
  passport.authenticate('jwt', { session: false }),
  (req: Request, res: Response) => {
    return res.status(200).json({ status: 200 })
  },
]
