import jwt from 'jsonwebtoken'
import createError from 'http-errors'
import { generateHash, validatePassword } from '../../lib/passwordUtils'
import * as AdminRepo from '../../repos/AdminRepo'
import { SECRET } from '../../config'

export const register = async (name: string, password: string) => {
  const admin = await AdminRepo.exists(name)

  if (admin) {
    throw createError(409, 'Admin already exists')
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

  return token
}

export const login = async (name: string, password: string) => {
  const admin = await AdminRepo.exists(name)

  if (!admin) {
    throw createError(400, 'No such admin')
  }

  const isPasswordValid = validatePassword(password, admin.password)

  if (!isPasswordValid) {
    throw createError(401, 'Incorrect password')
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

  return token
}
