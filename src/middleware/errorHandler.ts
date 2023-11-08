import { type ErrorRequestHandler } from 'express'
import { ENVIRONMENT } from '../config'

// eslint-disable-next-line
export const errorHandler: ErrorRequestHandler = (err, _, res, next) => {
  const { message } = err
  const error = ENVIRONMENT === 'development' ? err : {}

  console.log(err)

  res.status(err.statusCode || 500).json({ error, message })
}
