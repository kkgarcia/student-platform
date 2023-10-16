import prisma from '../lib/prisma'

type Module = {
  id?: number
  title: string
  subject: string
  text: string
  createdAt?: Date
  updatedAt: Date
}

export const create = async (module: Module) => {
  const newModule = await prisma.module.create({
    data: {
      title: module.title,
      subject: module.subject,
      text: module.text,
      createdAt: module.createdAt,
      updatedAt: module.updatedAt,
    },
  })

  return newModule
}

export const getAllModules = async () => {
  const moduleCollection = await prisma.module.findMany()

  return moduleCollection
}

export const update = async (moduleId: number, options: Module) => {
  const updatedModule = await prisma.module.update({
    where: {
      id: moduleId,
    },
    data: {
      title: options.title,
      subject: options.subject,
      text: options.text,
      updatedAt: options.updatedAt,
    },
  })

  return updatedModule
}

export const getOne = async (moduleId: number) => {
  const moduleDetails = await prisma.module.findUnique({
    where: {
      id: moduleId,
    },
    include: {
      commens: {
        include: {
          student: {
            select: {
              firstName: true,
              lastName: true,
              groupUnit: true,
            },
          },
        },
      },
      assigment: true,
    },
  })

  return moduleDetails
}

export const deleteOne = async (moduleId: number) => {
  const deletedModule = await prisma.module.delete({
    where: {
      id: moduleId,
    },
  })

  return deletedModule
}
