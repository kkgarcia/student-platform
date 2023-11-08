import prisma from '../lib/prisma'

export type Module = {
  id?: number
  title: string
  subject: string
  text: string
  updatedAt?: Date
  createdAt?: Date
}

export const create = async (module: Module) => {
  const newModule = await prisma.module.create({
    data: {
      title: module.title,
      subject: module.subject,
      text: module.text,
      createdAt: module.createdAt || new Date(),
      updatedAt: module.updatedAt || new Date(),
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
      updatedAt: options.updatedAt || new Date(),
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
      comments: {
        include: {
          user: {
            select: {
              firstName: true,
              lastName: true,
              groupUnit: true,
            },
          },
        },
      },
      assignments: true,
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
