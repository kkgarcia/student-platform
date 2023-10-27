import { Router } from 'express'
import { passport } from '../lib/passport.ts'
import * as adminController from '../controllers/adminController.ts'
import { validate } from '../middleware/validateRequest.ts'
import { adminDTO } from '../modules/Admin/adminDTO.ts'

const router = Router()

// POST for register Student
router.post(
  '/register',
  passport.authenticate('jwt', { session: false }),
  validate(adminDTO),
  adminController.register
)

// POST for login Student
router.post(
  '/log-in',
  passport.authenticate('jwt', { session: false }),
  validate(adminDTO),
  adminController.login
)

export default router
