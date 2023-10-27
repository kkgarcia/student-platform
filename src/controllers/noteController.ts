import asyncHandler from 'express-async-handler'
import * as NoteService from '../modules/Note/noteService'
import { Student } from '@prisma/client'

export const create = asyncHandler(async (req, res) => {
  const { id: studentId } = req.user as Student
  const { text } = req.body

  const newNote = await NoteService.creat(Number(studentId), text)

  res.status(202).json({ data: newNote })
})

export const getAll = asyncHandler(async (req, res) => {
  const { id: studentId } = req.user as Student

  const noteCollection = await NoteService.getAll(Number(studentId))

  res.status(200).json({ data: noteCollection })
})

export const update = asyncHandler(async (req, res) => {
  const { id: studentId } = req.user as Student
  const { noteId } = req.params
  const { text } = req.body

  const newNote = await NoteService.update(
    Number(noteId),
    Number(studentId),
    text
  )

  res.status(202).json({ data: newNote })
})

export const deleteOne = asyncHandler(async (req, res) => {
  const { id: studentId } = req.user as Student
  const { noteId } = req.params

  const deletedNote = await NoteService.deleteOne(
    Number(noteId),
    Number(studentId)
  )

  res.status(202).json({ data: deletedNote })
})
