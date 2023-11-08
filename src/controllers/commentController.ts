import asyncHandler from 'express-async-handler'
import * as CommentService from '../modules/Comment/commentService'
import { User } from '@prisma/client'

export const create = asyncHandler(async (req, res) => {
  const { id: userId } = req.user as User
  const { moduleId } = req.params
  const { text } = req.body

  const newComment = await CommentService.create({
    text,
    userId: Number(userId),
    moduleId: Number(moduleId),
  })

  res.status(202).json({ data: newComment })
})

export const update = asyncHandler(async (req, res) => {
  const { id: userId } = req.user as User
  const { commentId } = req.params
  const { text } = req.body

  const updatedComment = await CommentService.update(
    Number(commentId),
    Number(userId),
    text
  )

  res.status(202).json({ data: updatedComment })
})

export const remove = asyncHandler(async (req, res) => {
  const { id: userId } = req.user as User
  const { commentId } = req.params

  const deletedComment = await CommentService.remove(
    Number(commentId),
    Number(userId)
  )

  res.status(202).json({ data: deletedComment })
})
