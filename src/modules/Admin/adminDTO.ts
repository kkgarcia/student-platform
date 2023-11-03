import { z } from 'zod'

export const adminDTO = z.object({
  name: z.string().trim().min(1, { message: 'Name is required' }),
  password: z
    .string()
    .trim()
    .min(4, { message: 'Password must be 4 or more characters long' }),
})
