import prisma from '../lib/prisma'

export type UserProps = {
  firstName: string
  lastName: string
  groupUnit: number
  role?: 'STUDENT' | 'ADMIN'
  password: string
}

export const createUser = async (props: UserProps) => {
  return prisma.user.create({
    data: {
      firstName: props.firstName,
      lastName: props.lastName,
      groupUnit: props.groupUnit,
      password: props.password,
      role: props.role || 'STUDENT',
    },
  })
}

export const getUserById = async (userId: number) => {
  return prisma.user.findUnique({
    where: { id: userId },
    select: {
      id: true,
      firstName: true,
      lastName: true,
      groupUnit: true,
      role: true,
    },
  })
}

export const exists = async (
  firstName: string,
  lastName: string,
  groupUnit: number
) => {
  return prisma.user.findFirst({
    where: {
      firstName,
      lastName,
      groupUnit,
    },
  })
}
