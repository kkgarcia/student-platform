import { Comment } from '../../repos/CommentRepo'
import * as CommentRepo from '../../repos/CommentRepo'

export const create = async (comment: Comment) => {
  return await CommentRepo.create({
    text: comment.text,
    userId: comment.userId,
    moduleId: comment.moduleId,
  })
}

export const update = async (
  commentId: number,
  userId: number,
  newText: string
) => {
  return await CommentRepo.update(commentId, userId, newText)
}

export const remove = async (commentId: number, userId: number) => {
  return await CommentRepo.deleteOne(commentId, userId)
}
