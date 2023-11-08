import prisma from '../lib/prisma'

export type Assignment = {
  id?: number
  title: string
  text: string
  moduleId: number
  createdAt?: Date
  updatedAt?: Date
}

export type AssignmentUpdateOptions = Omit<Assignment, 'createdAt'>

export const create = async (assignment: Assignment) => {
  const newAssignment = await prisma.assignment.create({
    data: {
      title: assignment.title,
      text: assignment.text,
      moduleId: assignment.moduleId,
      createdAt: assignment.createdAt || new Date(),
      updatedAt: assignment.updatedAt || new Date(),
    },
  })

  return newAssignment
}

export const update = async (options: AssignmentUpdateOptions) => {
  const updatedAssignment = await prisma.assignment.update({
    where: {
      id: options.id,
      moduleId: options.moduleId,
    },
    data: {
      title: options.title,
      text: options.text,
      updatedAt: options.updatedAt || new Date(),
    },
  })

  return updatedAssignment
}

export const deleteOne = async (assigmentId: number, moduleId: number) => {
  const deletedAssignment = await prisma.assignment.delete({
    where: {
      id: assigmentId,
      moduleId,
    },
  })

  return deletedAssignment
}
