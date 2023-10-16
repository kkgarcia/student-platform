import prisma from '../lib/prisma'

type Comment = {
  id?: string
  moduleId: number
  studentId: number
  text: string
  createdAt: Date
  updatedAt?: Date
}

export const create = async (comment: Comment) => {
  const newComment = await prisma.comment.create({
    data: {
      text: comment.text,
      moduleId: comment.moduleId,
      studentId: comment.studentId,
      createdAt: comment.createdAt,
      updatedAt: comment.updatedAt,
    },
  })

  return newComment
}

export const update = async (commentId: number, newText: string) => {
  const updatedComment = await prisma.comment.update({
    where: {
      id: commentId,
    },
    data: {
      text: newText,
    },
  })

  return updatedComment
}

export const deleteOne = async (commentId: number) => {
  const deletedComment = await prisma.comment.delete({
    where: {
      id: commentId,
    },
  })

  return deletedComment
}
