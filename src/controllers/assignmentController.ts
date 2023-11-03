import asyncHandler from 'express-async-handler'
import * as AssignmentService from '../modules/Assignment/assignmentService'

export const create = asyncHandler(async (req, res) => {
  const { moduleId } = req.params
  const { title, text } = req.body

  const newAssignment = await AssignmentService.create({
    title,
    text,
    moduleId: Number(moduleId),
  })

  res.status(202).json({ data: newAssignment })
})

export const update = asyncHandler(async (req, res) => {
  const { moduleId, assigmentId } = req.params
  const { title, text } = req.body

  const updatedAssignment = await AssignmentService.update({
    id: Number(assigmentId),
    moduleId: Number(moduleId),
    title,
    text,
  })

  res.status(202).json({ data: updatedAssignment })
})

export const remove = asyncHandler(async (req, res) => {
  const { assigmentId, moduleId } = req.params

  const deletedAssignment = await AssignmentService.remove(
    Number(assigmentId),
    Number(moduleId)
  )

  res.status(202).json({ data: deletedAssignment })
})
