import { z } from 'zod'

export const summaryDTO = z.object({
  title: z.string().min(1, { message: 'Title is required' }),
  text: z.string().min(1, { message: 'Text is required' }),
})
