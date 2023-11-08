import { Request, Response, NextFunction } from 'express'
import { AnyZodObject } from 'zod'

export const validate =
  (schema: AnyZodObject) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body)

      return next()
    } catch (error) {
      return res.status(400).json(error)
    }
  }
