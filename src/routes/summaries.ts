import { Router } from 'express'
import { passport } from '../lib/passport'
import * as summaryController from '../controllers/summaryController'

const router = Router()

// GET for getting all Summaries
router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  summaryController.getAll
)

export default router
