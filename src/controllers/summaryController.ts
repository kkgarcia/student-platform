import asyncHandler from 'express-async-handler'
import * as SummaryService from '../modules/Summary/summaryService'
import { Student } from '@prisma/client'

export const create = asyncHandler(async (req, res) => {
  const { id: studentId } = req.user as Student
  const { title, text } = req.body

  const newSummary = await SummaryService.create({
    studentId: Number(studentId),
    title,
    text,
  })

  res.status(202).json({ data: newSummary })
})

export const getAll = asyncHandler(async (req, res) => {
  const { id: studenId } = req.user as Student

  const summaryCollection = SummaryService.getAll(Number(studenId))

  res.status(200).json({ data: summaryCollection })
})

export const update = asyncHandler(async (req, res) => {
  const { id: studentId } = req.user as Student
  const { summaryId } = req.params
  const { title, text } = req.body

  const updatedSummary = await SummaryService.update(Number(summaryId), {
    studentId: Number(studentId),
    title,
    text,
  })

  res.status(202).json({ data: updatedSummary })
})

export const remove = asyncHandler(async (req, res) => {
  const { id: studenId } = req.user as Student
  const { summaryId } = req.params

  const deletedSummary = await SummaryService.remove(
    Number(summaryId),
    Number(studenId)
  )

  res.status(202).json({ data: deletedSummary })
})
