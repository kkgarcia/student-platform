import prisma from '../lib/prisma'

export type Comment = {
  id?: string
  moduleId: number
  studentId: number
  text: string
  createdAt?: Date
  updatedAt?: Date
}

export const create = async (comment: Comment) => {
  const newComment = await prisma.comment.create({
    data: {
      text: comment.text,
      moduleId: comment.moduleId,
      studentId: comment.studentId,
      createdAt: comment.createdAt || new Date(),
      updatedAt: comment.updatedAt || new Date(),
    },
  })

  return newComment
}

export const update = async (
  commentId: number,
  studentId: number,
  newText: string
) => {
  const updatedComment = await prisma.comment.update({
    where: {
      id: commentId,
      studentId,
    },
    data: {
      text: newText,
    },
  })

  return updatedComment
}

export const deleteOne = async (commentId: number, studentId: number) => {
  const deletedComment = await prisma.comment.delete({
    where: {
      id: commentId,
      studentId,
    },
  })

  return deletedComment
}
