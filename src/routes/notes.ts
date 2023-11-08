import { Router } from 'express'
import { passport } from '../lib/passport'
import * as noteController from '../controllers/noteController'

const router = Router()

// GET all Notes
router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  noteController.getAll
)

export default router
