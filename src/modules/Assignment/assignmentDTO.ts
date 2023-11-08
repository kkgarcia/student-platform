import { z } from 'zod'

export const assignmentDTO = z.object({
  title: z.string().trim().min(1, { message: 'Title is required' }),
  text: z.string().trim().min(1, { message: 'Text is required' }),
})
