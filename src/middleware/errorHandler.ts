import { type ErrorRequestHandler } from 'express'
import dotenv from 'dotenv'
dotenv.config()

export const errorHandler: ErrorRequestHandler = (err, _, res, next) => {
  const msg = err.message
  const error = process.env.EVIRONMENT === 'development' ? err : {}

  console.log(err)

  res.status(err.status || 500).json({ error, msg })
}
