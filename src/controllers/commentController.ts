import asyncHandler from 'express-async-handler'
import * as CommentService from '../modules/Comment/commentService'
import { Student } from '@prisma/client'

export const create = asyncHandler(async (req, res) => {
  const { id: studentId } = req.user as Student
  const { moduleId } = req.params
  const { text } = req.body

  const newComment = await CommentService.create({
    text,
    studentId: Number(studentId),
    moduleId: Number(moduleId),
  })

  res.status(202).json({ data: newComment })
})

export const update = asyncHandler(async (req, res) => {
  const { id: studentId } = req.user as Student
  const { commentId } = req.params
  const { text } = req.body

  const updatedComment = await CommentService.update(
    Number(commentId),
    Number(studentId),
    text
  )

  res.status(202).json({ data: updatedComment })
})

export const remove = asyncHandler(async (req, res) => {
  const { id: studentId } = req.user as Student
  const { commentId } = req.params

  const deletedComment = await CommentService.remove(
    Number(commentId),
    Number(studentId)
  )

  res.status(202).json({ data: deletedComment })
})
