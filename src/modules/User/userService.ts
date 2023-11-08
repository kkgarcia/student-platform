import createError from 'http-errors'
import { generateHash, validatePassword } from '../../lib/passwordUtils'
import jwt from 'jsonwebtoken'
import { SECRET } from '../../config'
import { UserProps } from '../../repos/UserRepo'
import * as UserRepo from '../../repos/UserRepo'

export const register = async (credentials: UserProps) => {
  const isUserExists = await UserRepo.exists(
    credentials.firstName,
    credentials.lastName,
    credentials.groupUnit
  )

  if (isUserExists) {
    throw createError(409, 'User already exisits')
  }

  const newUser = await UserRepo.createUser({
    firstName: credentials.firstName,
    lastName: credentials.lastName,
    groupUnit: credentials.groupUnit,
    password: generateHash(credentials.password),
  })

  const payload = {
    sub: newUser.id,
    name: newUser.firstName,
    role: newUser.role,
    iat: Math.floor(Date.now() / 1000),
  }

  const token = jwt.sign(payload, SECRET as string, {
    expiresIn: '5d',
    algorithm: 'HS256',
  })

  return { token, user: newUser }
}

export const logIn = async (credentials: UserProps) => {
  const user = await UserRepo.exists(
    credentials.firstName,
    credentials.lastName,
    credentials.groupUnit
  )

  if (!user) {
    throw createError(400, 'No such user')
  }

  const isPasswordValid = validatePassword(credentials.password, user.password)

  if (!isPasswordValid) {
    throw createError(401, 'Incorrect password')
  }

  const payload = {
    sub: user.id,
    name: user.firstName,
    role: user.role,
    iat: Math.floor(Date.now() / 1000),
  }

  const token = jwt.sign(payload, SECRET as string, {
    expiresIn: '5d',
    algorithm: 'HS256',
  })

  return { token, user }
}

export const getUserById = async (userId: number) => {
  return UserRepo.getUserById(userId)
}
