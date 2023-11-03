import { z } from 'zod'

export const studentDTO = z.object({
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
