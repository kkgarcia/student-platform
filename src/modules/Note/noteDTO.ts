import { z } from 'zod'

export const noteDTO = z.object({
  text: z.string().trim().min(1, { message: 'Text is required' }),
})
