import { Router } from 'express'
import { passport } from '../lib/passport.ts'
import * as studentController from '../controllers/studentController'
import * as adminController from '../controllers/adminController.ts'

const router = Router()

// GET for chekcing if Student authenticated
router.get(
  '/student',
  passport.authenticate('jwt', { session: false }),
  studentController.isAuthenticated
)

// GET for chekcing if User is Admin
router.get(
  '/admin',
  passport.authenticate('jwt', { session: false }),
  adminController.isAuthorized
)

export default router
