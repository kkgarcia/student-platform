import { Summary } from '../../repos/SummaryRepo'
import * as SummaryRepo from '../../repos/SummaryRepo'

export const create = async (summary: Summary) => {
  return await SummaryRepo.create({
    userId: summary.userId,
    title: summary.title,
    text: summary.text,
  })
}

export const getAll = async (userId: number) => {
  return await SummaryRepo.getAll(userId)
}

export const update = async (summaryId: number, options: Summary) => {
  return await SummaryRepo.update({
    id: summaryId,
    userId: options.userId,
    title: options.title,
    text: options.text,
  })
}

export const remove = async (summaryId: number, userId: number) => {
  return await SummaryRepo.deleteOne(summaryId, userId)
}
