import { RequestHandler } from 'express'
import asyncHandler from 'express-async-handler'
import * as StudentService from '../modules/Student/studentService'

export const register = asyncHandler(async (req, res) => {
  const { firstName, lastName, groupUnit, password } = req.body

  const token = await StudentService.register({
    firstName,
    lastName,
    groupUnit,
    password,
  })

  res.status(202).json({ token })
})

export const login = asyncHandler(async (req, res) => {
  const { firstName, lastName, groupUnit, password } = req.body

  const token = await StudentService.logIn({
    firstName,
    lastName,
    groupUnit,
    password,
  })

  res.status(202).json({ token })
})

export const isAuthenticated: RequestHandler = (_, res) => {
  res.status(200).json({ message: 'Authenticated' })
}
