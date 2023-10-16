import asyncHandler from 'express-async-handler'
import passport from '../config/passport'
import * as SummaryRepo from '../repos/SummaryRepo'
import { Student } from '@prisma/client'

export const create = [
  passport.authenticate('jwt', { session: false }),
  asyncHandler(async (req, res) => {
    const { id: studentId } = req.user as Student
    const { title, text } = req.body

    const newSummary = await SummaryRepo.create({
      studentId,
      title,
      text,
      createdAt: new Date(),
      updatedAt: new Date(),
    })

    res.status(202).json({ data: newSummary })
  }),
]

export const getAll = [
  passport.authenticate('jwt', { session: false }),
  asyncHandler(async (req, res) => {
    const { id: studentId } = req.user as Student

    const allSummaries = await SummaryRepo.getAll(Number(studentId))

    res.status(200).json({ data: allSummaries })
  }),
]

export const update = [
  passport.authenticate('jwt', { session: false }),
  asyncHandler(async (req, res) => {
    const { id: studentId } = req.user as Student
    const { summaryId } = req.params
    const { title, text } = req.body

    const updatedSummary = await SummaryRepo.update({
      id: Number(summaryId),
      studentId,
      title,
      text,
      updatedAt: new Date(),
    })

    res.status(202).json({ data: updatedSummary })
  }),
]

export const remove = [
  passport.authenticate('jwt', { session: false }),
  asyncHandler(async (req, res) => {
    const { id: studentId } = req.user as Student
    const { summaryId } = req.params

    const deletedSummary = await SummaryRepo.deleteOne(
      Number(summaryId),
      Number(studentId)
    )

    res.status(202).json({ data: deletedSummary })
  }),
]
