import prisma from '../lib/prisma.ts'

type Note = {
  id?: number
  studentId: number
  text: string
  createdAt: Date
  updatedAt: Date
}

export const create = async (note: Note) => {
  const newNote = await prisma.note.create({
    data: {
      studentId: note.studentId,
      text: note.text,
      createdAt: note.createdAt,
      updatedAt: note.updatedAt,
    },
  })

  return newNote
}

export const getAll = async (studentId: number) => {
  const allNotes = await prisma.note.findMany({
    where: {
      studentId,
    },
  })

  return allNotes
}

export const update = async (noteId: number, newText: string) => {
  const updatedNote = await prisma.note.update({
    where: {
      id: noteId,
    },
    data: {
      text: newText,
      updatedAt: new Date(),
    },
  })

  return updatedNote
}

export const deleteOne = async (noteId: number) => {
  const deletedNote = await prisma.note.delete({
    where: {
      id: noteId,
    },
  })

  return deletedNote
}
