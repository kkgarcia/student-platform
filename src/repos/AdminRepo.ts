import prisma from '../lib/prisma.ts'

type Admin = {
  id?: number
  name: string
  password: string
}

export const exists = async (name: string) => {
  const admin = await prisma.admin.findFirst({
    where: {
      name,
    },
  })

  return admin
}

export const isAdmin = async (userId: number) => {
  const admin = await prisma.admin.findUnique({
    where: { id: userId },
  })

  return !!admin
}

export const getAdminById = async (adminId: number) => {
  const admin = await prisma.admin.findUnique({
    where: { id: adminId },
  })

  return admin
}

export const create = async (admin: Admin) => {
  const newAdmin = await prisma.admin.create({
    data: {
      name: admin.name,
      password: admin.password,
    },
  })

  return newAdmin
}
