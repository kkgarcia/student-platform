import { Router } from 'express'
import { passport } from '../lib/passport.ts'
import * as adminController from '../controllers/adminController.ts'

const router = Router()

// POST for register Student
router.post(
  '/register',
  passport.authenticate('jwt', { session: false }),
  adminController.register
)

// POST for login Student
router.post(
  '/log-in',
  passport.authenticate('jwt', { session: false }),
  adminController.login
)

export default router
