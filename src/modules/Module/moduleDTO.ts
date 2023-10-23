import { z } from 'zod'

export const moduleDTO = z.object({
  title: z.string().trim().min(1, { message: 'Title is required' }),
  subject: z.string().trim().min(1, { message: 'Subject is required' }),
  text: z.string().trim().min(1, { message: 'Text is required' }),
})
