import asyncHandler from 'express-async-handler'
import * as ModuleService from '../modules/Module/moduleService'

export const create = asyncHandler(async (req, res) => {
  const { title, subject, text } = req.body

  const newModule = await ModuleService.create({
    title,
    subject,
    text,
  })

  res.status(202).json({ data: newModule })
})

export const update = asyncHandler(async (req, res) => {
  const { moduleId } = req.params
  const { title, subject, text } = req.body

  const updatedModule = await ModuleService.update(Number(moduleId), {
    title,
    subject,
    text,
  })

  res.status(202).json({ data: updatedModule })
})

export const getAll = asyncHandler(async (req, res) => {
  const moduleCollection = await ModuleService.getAll()

  res.status(200).json({ data: moduleCollection })
})

export const getOne = asyncHandler(async (req, res) => {
  const { moduleId } = req.params

  const moduleDetails = await ModuleService.getOne(Number(moduleId))

  res.status(200).json({ data: moduleDetails })
})

export const deleteOne = asyncHandler(async (req, res) => {
  const { moduleId } = req.params

  const deletedModule = await ModuleService.deleteOne(Number(moduleId))

  res.status(202).json({ data: deletedModule })
})
