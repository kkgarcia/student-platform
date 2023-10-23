import asyncHandler from 'express-async-handler'
import { validate } from '../../middleware/validateRequest.ts'
import { moduleDTO } from './moduleDTO'
import * as ModuleRepo from '../../repos/ModuleRepo'
import { Module } from '@prisma/client'

export const create = [
  validate(moduleDTO),
  asyncHandler(async (req, res) => {
    const { title, subject, text } = req.body

    const newModule = await ModuleRepo.create({
      title,
      subject,
      text,
      createdAt: new Date(),
      updatedAt: new Date(),
    })

    res.status(202).json({ data: newModule })
  }),
]

export const update = [
  validate(moduleDTO),
  asyncHandler(async (req, res) => {
    const { moduleId } = req.params
    const { title, subject, text } = req.body as Module

    const options = {
      title,
      subject,
      text,
      updatedAt: new Date(),
    }

    const updatedModule = await ModuleRepo.update(Number(moduleId), options)

    res.status(202).json({ data: updatedModule })
  }),
]

export const getAll = [
  asyncHandler(async (req, res) => {
    const moduleCollection = await ModuleRepo.getAllModules()

    res.status(200).json({ data: moduleCollection })
  }),
]

export const getOne = [
  asyncHandler(async (req, res) => {
    const { moduleId } = req.params

    const moduleDetails = await ModuleRepo.getOne(Number(moduleId))

    res.status(200).json({ data: moduleDetails })
  }),
]

export const deleteOne = [
  asyncHandler(async (req, res) => {
    const { moduleId } = req.params

    const deletedModule = await ModuleRepo.deleteOne(Number(moduleId))

    res.status(202).json({ data: deletedModule })
  }),
]
