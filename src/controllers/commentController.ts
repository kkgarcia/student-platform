import asyncHandler from 'express-async-handler'
import passport from '../config/passport'
import * as CommentRepo from '../repos/CommentRepo'
import { Student } from '@prisma/client'

export const create = [
  passport.authenticate('jwt', { session: false }),
  asyncHandler(async (req, res) => {
    const { id: studentId } = req.user as Student
    const { moduleId } = req.params
    const { text } = req.body

    const newComment = await CommentRepo.create({
      text,
      studentId,
      moduleId: Number(moduleId),
      createdAt: new Date(),
      updatedAt: new Date(),
    })

    res.status(202).json({ data: newComment })
  }),
]

export const update = [
  passport.authenticate('jwt', { session: false }),
  asyncHandler(async (req, res) => {
    const { commentId } = req.params
    const { text } = req.body

    const newComment = await CommentRepo.update(Number(commentId), text)

    res.status(202).json({ data: newComment })
  }),
]

export const remove = [
  passport.authenticate('jwt', { session: false }),
  asyncHandler(async (req, res) => {
    const { commentId } = req.params

    const deletedComment = await CommentRepo.deleteOne(Number(commentId))

    res.status(202).json({ data: deletedComment })
  }),
]