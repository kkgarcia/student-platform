import asyncHandler from 'express-async-handler'
import jwt from 'jsonwebtoken'
import { validate } from '../../middleware/validateRequest'
import { adminDTO } from './adminDTO'
import { generateHash, validatePassword } from '../../lib/passwordUtils'
import * as AdminRepo from '../../repos/AdminRepo'
import { SECRET } from '../../config'

export const register = [
  validate(adminDTO),
  asyncHandler(async (req, res) => {
    const { name, password } = req.body

    const admin = await AdminRepo.exists(name)

    if (admin) {
      res.status(409).json({
        error: 'Admin already exists',
      })
      return
    }

    const newAdmin = await AdminRepo.create({
      name,
      password: generateHash(password),
    })

    const payload = {
      sub: newAdmin.id,
      name: newAdmin.name,
      role: 'ADMIN',
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
  validate(adminDTO),
  asyncHandler(async (req, res) => {
    const { name, password } = req.body

    const admin = await AdminRepo.exists(name)

    if (!admin) {
      res.status(400).json({
        error: 'No such admin',
      })
      return
    }

    const isPasswordValid = validatePassword(password, admin.password)

    if (!isPasswordValid) {
      res.status(401).json({
        error: 'Incorrect passoword',
      })
      return
    }

    const payload = {
      sub: admin.id,
      name: admin.name,
      role: 'ADMIN',
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
  asyncHandler(async (req, res) => {
    res.status(200).json({ status: 'Authorized' })
  }),
]
