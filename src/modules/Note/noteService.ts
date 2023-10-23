import asyncHandler from 'express-async-handler'
import { validate } from '../../middleware/validateRequest.ts'
import { noteDTO } from './noteDTO'
import * as NoteRepo from '../../repos/NoteRepo'
import { Student } from '@prisma/client'

export const create = [
  validate(noteDTO),
  asyncHandler(async (req, res) => {
    const { id: studentId } = req.user as Student
    const { text } = req.body

    const newNote = await NoteRepo.create({
      studentId,
      text,
      createdAt: new Date(),
      updatedAt: new Date(),
    })

    res.status(202).json({ data: newNote })
  }),
]

export const getAll = [
  asyncHandler(async (req, res) => {
    const { id: studentId } = req.user as Student

    const allNotes = await NoteRepo.getAll(studentId)

    res.status(200).json({ data: allNotes })
  }),
]

export const update = [
  validate(noteDTO),
  asyncHandler(async (req, res) => {
    const { noteId } = req.params
    const { text } = req.body

    const newNote = await NoteRepo.update(Number(noteId), text)

    res.status(202).json({ data: newNote })
  }),
]

export const deleteOne = [
  asyncHandler(async (req, res) => {
    const { noteId } = req.params

    const deletedNote = await NoteRepo.deleteOne(Number(noteId))

    res.status(202).json({ data: deletedNote })
  }),
]
