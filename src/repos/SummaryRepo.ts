import prisma from '../lib/prisma'

export type Summary = {
  id?: number
  studentId: number
  title: string
  text: string
  createdAt?: Date
  updatedAt?: Date
}

export type SummaryUpdateOptions = Omit<Summary, 'createdAt'>

export const create = async (summary: Summary) => {
  const newSummary = await prisma.summary.create({
    data: {
      studentId: summary.studentId,
      title: summary.title,
      text: summary.text,
      createdAt: summary.createdAt || new Date(),
      updatedAt: summary.updatedAt || new Date(),
    },
  })

  return newSummary
}

export const getAll = async (studentId: number) => {
  const allSummaries = await prisma.summary.findMany({
    where: {
      studentId,
    },
  })

  return allSummaries
}

export const update = async (options: SummaryUpdateOptions) => {
  const updatedSummary = await prisma.summary.update({
    where: {
      id: options.id,
      studentId: options.studentId,
    },
    data: {
      title: options.title,
      text: options.text,
      updatedAt: options.updatedAt || new Date(),
    },
  })

  return updatedSummary
}

export const deleteOne = async (summaryId: number, studentId: number) => {
  const deletedSummary = await prisma.summary.delete({
    where: {
      id: summaryId,
      studentId,
    },
  })

  return deletedSummary
}
