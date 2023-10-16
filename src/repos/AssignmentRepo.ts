import prisma from '../lib/prisma'

type Assignment = {
  id?: number
  title: string
  text: string
  moduleId: number
  createdAt: Date
  updatedAt?: Date
}

type AssignmentUpdateOptions = Omit<Assignment, 'createdAt'>

export const create = async (assignment: Assignment) => {
  const newAssignment = await prisma.assigment.create({
    data: {
      title: assignment.title,
      text: assignment.text,
      moduleId: assignment.moduleId,
      createdAt: assignment.createdAt,
      updatedAt: assignment.updatedAt,
    },
  })

  return newAssignment
}

export const update = async (options: AssignmentUpdateOptions) => {
  const updatedAssignment = await prisma.assigment.update({
    where: {
      id: options.id,
      moduleId: options.moduleId,
    },
    data: {
      title: options.title,
      text: options.text,
      updatedAt: options.updatedAt,
    },
  })

  return updatedAssignment
}

export const deleteOne = async (assigmentId: number, moduleId: number) => {
  const deletedAssignment = await prisma.assigment.delete({
    where: {
      id: assigmentId,
      moduleId,
    },
  })

  return deletedAssignment
}
