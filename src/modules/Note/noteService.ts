import * as NoteRepo from '../../repos/NoteRepo'

export const creat = async (studentId: number, text: string) => {
  return await NoteRepo.create({
    studentId,
    text,
  })
}

export const getAll = async (studentId: number) => {
  return await NoteRepo.getAll(studentId)
}

export const update = async (
  noteId: number,
  studentId: number,
  text: string
) => {
  return await NoteRepo.update(noteId, studentId, text)
}

export const deleteOne = async (noteId: number, studentId: number) => {
  return await NoteRepo.deleteOne(noteId, studentId)
}
