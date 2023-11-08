import asyncHandler from 'express-async-handler'
import * as SummaryService from '../modules/Summary/summaryService'
import { User } from '@prisma/client'

export const create = asyncHandler(async (req, res) => {
  const { id: userId } = req.user as User
  const { title, text } = req.body

  const newSummary = await SummaryService.create({
    userId: Number(userId),
    title,
    text,
  })

  res.status(202).json({ data: newSummary })
})

export const getAll = asyncHandler(async (req, res) => {
  const { id: studenId } = req.user as User

  const summaryCollection = SummaryService.getAll(Number(studenId))

  res.status(200).json({ data: summaryCollection })
})

export const update = asyncHandler(async (req, res) => {
  const { id: userId } = req.user as User
  const { summaryId } = req.params
  const { title, text } = req.body

  const updatedSummary = await SummaryService.update(Number(summaryId), {
    userId: Number(userId),
    title,
    text,
  })

  res.status(202).json({ data: updatedSummary })
})

export const remove = asyncHandler(async (req, res) => {
  const { id: studenId } = req.user as User
  const { summaryId } = req.params

  const deletedSummary = await SummaryService.remove(
    Number(summaryId),
    Number(studenId)
  )

  res.status(202).json({ data: deletedSummary })
})
