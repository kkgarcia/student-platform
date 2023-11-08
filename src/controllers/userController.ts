import asyncHandler from 'express-async-handler'
import * as UserService from '../modules/User/userService'
import { User } from '@prisma/client'

export const register = asyncHandler(async (req, res) => {
  const { firstName, lastName, groupUnit, password } = req.body

  const { token, user } = await UserService.register({
    firstName,
    lastName,
    groupUnit,
    password,
  })

  res.status(201).json({ token, user })
})

export const login = asyncHandler(async (req, res) => {
  const { firstName, lastName, groupUnit, password } = req.body

  const { token, user } = await UserService.logIn({
    firstName,
    lastName,
    groupUnit,
    password,
  })

  res.status(200).json({ token, user })
})

export const getUser = asyncHandler(async (req, res) => {
  const { id: userId } = req.user as User

  const user = await UserService.getUserById(userId)

  res.status(200).json({ user })
})
