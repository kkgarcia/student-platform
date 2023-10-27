import { Summary } from '../../repos/SummaryRepo'
import * as SummaryRepo from '../../repos/SummaryRepo'

export const create = async (summary: Summary) => {
  return await SummaryRepo.create({
    studentId: summary.studentId,
    title: summary.title,
    text: summary.text,
  })
}

export const getAll = async (studenId: number) => {
  return await SummaryRepo.getAll(studenId)
}

export const update = async (summaryId: number, options: Summary) => {
  return await SummaryRepo.update({
    id: summaryId,
    studentId: options.studentId,
    title: options.title,
    text: options.text,
  })
}

export const remove = async (summaryId: number, studenId: number) => {
  return await SummaryRepo.deleteOne(summaryId, studenId)
}
