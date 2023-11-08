import * as NoteRepo from '../../repos/NoteRepo'

export const creat = async (userId: number, text: string) => {
  return await NoteRepo.create({
    userId,
    text,
  })
}

export const getAll = async (userId: number) => {
  return await NoteRepo.getAll(userId)
}

export const update = async (noteId: number, userId: number, text: string) => {
  return await NoteRepo.update(noteId, userId, text)
}

export const deleteOne = async (noteId: number, userId: number) => {
  return await NoteRepo.deleteOne(noteId, userId)
}
