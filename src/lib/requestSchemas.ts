import { z } from 'zod'

export const student = z.object({
  firstName: z.string().trim().min(1, { message: 'First name is required' }),
  lastName: z.string().trim().min(1, { message: 'Last name is required' }),
  groupUnit: z
    .number({
      required_error: 'Group unite is required',
      invalid_type_error: 'Group unit must be a number',
    })
    .positive()
    .safe(),
  password: z
    .string()
    .trim()
    .min(4, { message: 'Password must be 4 or more characters long' }),
})

export const note = z.object({
  text: z.string().trim().min(1, { message: 'Text is required' }),
})

export const summary = z.object({
  title: z.string().min(1, { message: 'Title is required' }),
  text: z.string().min(1, { message: 'Text is required' }),
})

export const admin = z.object({
  name: z.string().trim().min(1, { message: 'Name is required' }),
  password: z
    .string()
    .trim()
    .min(4, { message: 'Password must be 4 or more characters long' }),
})

export const module = z.object({
  title: z.string().trim().min(1, { message: 'Title is required' }),
  subject: z.string().trim().min(1, { message: 'Subject is required' }),
  text: z.string().trim().min(1, { message: 'Text is required' }),
})

export const assignment = z.object({
  title: z.string().trim().min(1, { message: 'Title is required' }),
  text: z.string().trim().min(1, { message: 'Text is required' }),
})

export const comment = z.object({
  text: z.string().trim().min(1, { message: 'Text is required' }),
})
