import { Comment } from '../../repos/CommentRepo'
import * as CommentRepo from '../../repos/CommentRepo'

export const create = async (comment: Comment) => {
  return await CommentRepo.create({
    text: comment.text,
    studentId: comment.studentId,
    moduleId: comment.moduleId,
  })
}

export const update = async (
  commentId: number,
  studentId: number,
  newText: string
) => {
  return await CommentRepo.update(commentId, studentId, newText)
}

export const remove = async (commentId: number, studentId: number) => {
  return await CommentRepo.deleteOne(commentId, studentId)
}
