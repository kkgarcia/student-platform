import asyncHandler from 'express-async-handler'
import passport from '../config/passport'
import { validate } from '../middleware/validateRequest.ts'
import * as requestSchemas from '../lib/requestSchemas.ts'
import * as AssignmentRepo from '../repos/AssignmentRepo'

export const create = [
  validate(requestSchemas.assignment),
  passport.authenticate('jwt', { session: false }),
  asyncHandler(async (req, res) => {
    const { moduleId } = req.params
    const { title, text } = req.body

    const newAssignment = await AssignmentRepo.create({
      title,
      text,
      moduleId: Number(moduleId),
      createdAt: new Date(),
      updatedAt: new Date(),
    })

    res.status(202).json({ data: newAssignment })
  }),
]

export const update = [
  validate(requestSchemas.assignment),
  passport.authenticate('jwt', { session: false }),
  asyncHandler(async (req, res) => {
    const { moduleId, assignmentId } = req.params
    const { title, text } = req.body

    const updatedAssignment = await AssignmentRepo.update({
      id: Number(assignmentId),
      moduleId: Number(moduleId),
      title,
      text,
      updatedAt: new Date(),
    })

    res.status(202).json({ data: updatedAssignment })
  }),
]

export const remove = [
  passport.authenticate('jwt', { session: false }),
  asyncHandler(async (req, res) => {
    const { moduleId, assigmentId } = req.params

    const deletedAssignment = await AssignmentRepo.deleteOne(
      Number(assigmentId),
      Number(moduleId)
    )

    res.status(202).json({ data: deletedAssignment })
  }),
]
