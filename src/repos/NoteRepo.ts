import prisma from '../lib/prisma.ts'

export type Note = {
  id?: number
  userId: number
  text: string
  createdAt?: Date
  updatedAt?: Date
}

export const create = async (note: Note) => {
  const newNote = await prisma.note.create({
    data: {
      userId: note.userId,
      text: note.text,
      createdAt: note.createdAt || new Date(),
      updatedAt: note.updatedAt || new Date(),
    },
  })

  return newNote
}

export const getAll = async (userId: number) => {
  const allNotes = await prisma.note.findMany({
    where: {
      userId,
    },
  })

  return allNotes
}

export const update = async (
  noteId: number,
  userId: number,
  newText: string
) => {
  const updatedNote = await prisma.note.update({
    where: {
      id: noteId,
      userId,
    },
    data: {
      text: newText,
      updatedAt: new Date(),
    },
  })

  return updatedNote
}

export const deleteOne = async (noteId: number, userId: number) => {
  const deletedNote = await prisma.note.delete({
    where: {
      id: noteId,
      userId,
    },
  })

  return deletedNote
}
