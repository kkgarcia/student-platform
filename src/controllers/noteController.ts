import asyncHandler from 'express-async-handler'
import * as NoteService from '../modules/Note/noteService'
import { User } from '@prisma/client'

export const create = asyncHandler(async (req, res) => {
  const { id: userId } = req.user as User
  const { text } = req.body

  const newNote = await NoteService.creat(Number(userId), text)

  res.status(202).json({ data: newNote })
})

export const getAll = asyncHandler(async (req, res) => {
  const { id: userId } = req.user as User

  const noteCollection = await NoteService.getAll(Number(userId))

  res.status(200).json({ data: noteCollection })
})

export const update = asyncHandler(async (req, res) => {
  const { id: userId } = req.user as User
  const { noteId } = req.params
  const { text } = req.body

  const newNote = await NoteService.update(Number(noteId), Number(userId), text)

  res.status(202).json({ data: newNote })
})

export const deleteOne = asyncHandler(async (req, res) => {
  const { id: userId } = req.user as User
  const { noteId } = req.params

  const deletedNote = await NoteService.deleteOne(
    Number(noteId),
    Number(userId)
  )

  res.status(202).json({ data: deletedNote })
})
