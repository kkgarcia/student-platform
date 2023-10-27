import { RequestHandler } from 'express'
import * as AdminService from '../modules/Admin/adminService.ts'
import asyncHandler from 'express-async-handler'

export const register = asyncHandler(async (req, res) => {
  const { name, passoword } = req.body

  const token = await AdminService.register(name, passoword)

  res.status(202).json({ token })
})

export const login = asyncHandler(async (req, res) => {
  const { name, password } = req.body

  const token = await AdminService.login(name, password)

  res.status(202).json({ token })
})

export const isAuthorized: RequestHandler = (_, res) => {
  res.status(200).json({ message: 'Authorized' })
}
