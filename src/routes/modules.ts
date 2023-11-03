import { Router } from 'express'
import { passport } from '../lib/passport'
import * as moduleController from '../controllers/moduleController'

const router = Router()

// GET for creating Module
router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  moduleController.getAll
)

export default router
